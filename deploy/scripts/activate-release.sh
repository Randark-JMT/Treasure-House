#!/usr/bin/env bash
# 服务端原子发布：incoming -> releases/<id> -> current 符号链接切换 -> 冒烟 -> 失败自动回滚 -> 保留最近 N 份
#
# 由 CI 通过 ssh 调用（source-only 模式复用函数），也可直接手工执行：
#   bash /var/www/html/treasure-house/activate-release.sh 20261007T031500Z-e21ac838
#   bash /var/www/html/treasure-house/activate-release.sh --rollback
#   bash /var/www/html/treasure-house/activate-release.sh --list
set -euo pipefail

BASE="${BASE:-/var/www/html/treasure-house}"
INCOMING="$BASE/incoming"
RELEASES="$BASE/releases"
CURRENT="$BASE/current"
LOG_DIR="$BASE/logs"
LOG_FILE="$LOG_DIR/deploy.log"
KEEP="${KEEP:-5}"
MIN_FILES="${MIN_FILES:-300}"
SMOKE_HOST="${SMOKE_HOST:-treasure-house.randark.site}"

log() {
  local msg
  msg="[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*"
  printf '%s\n' "$msg"
  # 日志写不进不能影响发布：CI 依赖退出码判断切流结果
  mkdir -p "$(dirname "$LOG_FILE")" 2>/dev/null || true
  printf '%s\n' "$msg" >> "$LOG_FILE" 2>/dev/null || true
}
die() { log "FATAL: $*"; exit 1; }

current_release_id() {
  local t
  t="$(readlink "$CURRENT" 2>/dev/null || true)"
  [[ -n "$t" ]] && basename "$t" || true
}

# 发布前门禁：宁可拒绝一次部署，也不能让空目录或残缺构建把线上清空
validate_incoming() {
  [[ -d "$INCOMING" ]] || die "incoming 目录不存在：$INCOMING"
  [[ -f "$INCOMING/index.html" ]] || die "incoming/index.html 缺失，疑似构建产物异常"
  [[ -f "$INCOMING/404.html" ]] || die "incoming/404.html 缺失，疑似构建产物异常"
  # rsync --partial-dir 留下的半包目录不属于站点内容，物化前清掉，避免被硬链接进 release
  rm -rf -- "$INCOMING/.rsync-partial"
  local n
  n="$(find "$INCOMING" -type f | wc -l)"
  (( n >= MIN_FILES )) || die "incoming 文件数 $n < MIN_FILES=$MIN_FILES，疑似残缺构建"
  log "gate ok: incoming files=$n"
}

# 用硬链接落盘：瞬时完成且几乎不占额外空间；CI 每次构建后都会 --delete 重灌 incoming，
# 所以不会出现「在 release 里就地改写文件」从而污染其它 release 的情况
materialize_release() {
  local rel_id="$1"
  local stage="$RELEASES/.staging-$rel_id"
  local target="$RELEASES/$rel_id"
  [[ -n "$rel_id" && "$rel_id" != "." && "$rel_id" != ".." ]] || die "非法 release id: '$rel_id'"
  [[ -e "$target" ]] && die "release 已存在：$target"
  rm -rf "$stage"
  mkdir -p "$stage"
  cp -al "$INCOMING/." "$stage/" || { rm -rf "$stage"; mkdir -p "$stage"; cp -a "$INCOMING/." "$stage/"; }
  find "$stage" -type d -exec chmod 0755 {} +
  find "$stage" -type f -exec chmod 0644 {} +
  mv -T "$stage" "$target"
  log "materialized release=$rel_id"
}

# 符号链接 + rename(2) 原子替换：切换过程没有空目录窗口，nginx 无需 reload
swap_current() {
  local rel_id="$1" tmp
  tmp="$BASE/.current.tmp.$$"
  ln -sfn "$RELEASES/$rel_id" "$tmp"
  mv -Tf "$tmp" "$CURRENT"
  log "current switched -> $rel_id"
}

# 走 127.0.0.1 + --resolve，不依赖公网 DNS，割接前也能验证站点内容
smoke() {
  local probe="${SMOKE_PROBE_IP:-127.0.0.1}" url body
  url="https://$SMOKE_HOST/"
  if ! body="$(curl -fsS --max-time 15 --compressed --resolve "$SMOKE_HOST:443:$probe" "$url" 2>/dev/null)"; then
    log "SMOKE FAIL: $url 非 2xx"
    return 1
  fi
  if ! grep -q '</html>' <<<"$body"; then
    log "SMOKE FAIL: $url 响应缺少 </html>，内容疑似不完整"
    return 1
  fi
  log "smoke ok: 200 + html 结构完整（${#body} bytes）"
}

# 按新旧排序列出 release（最新在前）。
# 不用 ls -1t：同一秒内连续发布两次时纯 mtime 排序不稳定，
# 会让 prune / rollback 选错版本，因此把文件名作为二级排序键。
list_releases_by_age() {
  find "$RELEASES" -mindepth 1 -maxdepth 1 -type d -not -name '.staging-*' \
    -printf '%T@\t%f\n' 2>/dev/null \
    | sort -r -k1,1 -k2,2 \
    | cut -f2
}

# 只保留最近 KEEP 份，且绝不删除 current 与上一个可用版本（回滚杠杆）
prune_releases() {
  local keep="$KEEP" cur removed=0 r i=0
  cur="$(current_release_id)"
  while IFS= read -r r; do
    [[ -z "$r" ]] && continue
    i=$((i + 1))
    [[ "$r" == "$cur" ]] && continue
    if (( i > keep )); then
      rm -rf -- "$RELEASES/$r" 2>/dev/null || log "WARN: 无法删除旧 release $r"
      removed=$((removed + 1))
    fi
  done < <(list_releases_by_age)
  log "prune kept=$keep removed=$removed"
}

rollback() {
  local cur prev
  cur="$(current_release_id)"
  prev="$(list_releases_by_age | grep -v -x -- "$cur" | head -1 || true)"
  [[ -n "$prev" ]] || die "没有可回滚的历史 release"
  swap_current "$prev"
  smoke || log "WARN: 回滚后冒烟仍失败，请立即人工介入（nginx root 指向 $CURRENT）"
  log "rolled back: ${cur:-none} -> $prev"
}

# 切到指定历史版本（不重新物化 incoming），用于「回滚到某一天」与灰度回退
switch_to() {
  local rel_id="$1" cur prev
  [[ -d "$RELEASES/$rel_id" ]] || die "release 不存在：$RELEASES/$rel_id（用 --list 查看可用版本）"
  cur="$(current_release_id)"
  prev="$cur"
  swap_current "$rel_id"
  if ! smoke; then
    log "ERROR: 目标版本冒烟失败，恢复 -> ${prev:-无}"
    [[ -n "$prev" ]] && { swap_current "$prev"; smoke || log "CRITICAL: 恢复后仍失败"; }
    die "switch aborted: smoke test failed for $rel_id"
  fi
  write_deploy_info "$rel_id" || log "WARN: deploy-info 写入失败"
  log "switched: ${cur:-none} -> $rel_id"
}

write_deploy_info() {
  local rel_id="$1"
  mkdir -p "$BASE/shared" 2>/dev/null || { log "WARN: 无法创建 shared 目录，跳过审计信息"; return 0; }
  printf '{"release":"%s","switched_at":"%s","runner":"%s","commit":"%s","run_url":"%s"}\n' \
    "$rel_id" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "${RUNNER_NAME:-manual}" \
    "${GIT_SHA:-unknown}" "${GH_RUN_URL:-none}" > "$BASE/shared/deploy-info.json" \
    || log "WARN: 写入 deploy-info.json 失败（不影响已生效的切流）"
}

activate() {
  local rel_id="${1:?用法: activate-release.sh <release-id> | --rollback | --list}"
  validate_incoming
  materialize_release "$rel_id"
  local prev; prev="$(current_release_id)"
  swap_current "$rel_id"
  if ! smoke; then
    log "ERROR: 新版本冒烟失败，自动回滚 -> ${prev:-无}"
    if [[ -n "$prev" ]]; then swap_current "$prev"; smoke || log "CRITICAL: 回滚后仍失败"; else die "无历史版本可回滚"; fi
    die "deploy aborted: smoke test failed for $rel_id"
  fi
  write_deploy_info "$rel_id" || log "WARN: deploy-info 写入失败（不影响已生效版本）"
  prune_releases || log "WARN: 旧版本清理失败（不影响已生效版本）"
  log "done release=$rel_id current=$(current_release_id)"
}

# CI 通过 `source` 复用函数时必须置 1，否则 source 会立刻执行分派逻辑
if [[ "${TH_SOURCE_ONLY:-0}" == "1" ]]; then
  return 0 2>/dev/null || true
fi

case "${1:-}" in
  --rollback) rollback ;;
  --use) switch_to "${2:?用法: --use <release-id>}" ;;
  --check)
    cur="$(current_release_id)"
    [[ -n "${2:-}" && "$cur" == "$2" ]] || { echo "current=$cur != expected=$2"; exit 1; }
    echo "current=$cur"
    ;;
  --list) list_releases_by_age ;;
  --status)
    echo "current=$(current_release_id)"
    echo "releases=$(list_releases_by_age | wc -l)"
    cat "$BASE/shared/deploy-info.json" 2>/dev/null || true
    ;;
  "") die "用法: activate-release.sh <release-id> | --rollback | --use <id> | --check <id> | --list | --status" ;;
  *) activate "$1" ;;
esac
