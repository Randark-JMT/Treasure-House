#!/usr/bin/env bash
# activate-release.sh 的离线自检：不联网、不碰真站点，在临时目录里跑完整发布/回滚逻辑。
#
#   bash deploy/scripts/selftest.sh
#
# 在 Linux（服务器或 WSL）上会用真实的 current 符号链接执行；
# 在不支持符号链接的环境（如 Windows Git Bash）自动降级为 swap_current 桩，
# 只替换切流动作本身，门禁 / 物化 / 冒烟 / 回滚 / prune / --use 仍是真实代码路径。
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMPL="$SCRIPT_DIR/activate-release.sh"
[[ -f "$IMPL" ]] || { echo "找不到 $IMPL"; exit 1; }

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
export BASE="$WORK/th"
export SMOKE_HOST=treasure-house.example
export MIN_FILES=3 KEEP=2
mkdir -p "$BASE/incoming" "$WORK/bin"

pass=0; failn=0
ok()   { pass=$((pass+1)); printf '  \033[32mPASS\033[0m %s\n' "$1"; }
bad()  { failn=$((failn+1)); printf '  \033[31mFAIL\033[0m %s\n' "$1"; [[ -n "${2:-}" ]] && printf '       %s\n' "$2"; }

# curl 替身：只判断 URL 是否存在与 FAKE_CURL_* 开关，真实脚本会传一堆选项
cat > "$WORK/bin/curl" <<'EOF'
#!/usr/bin/env bash
url=""
for a in "$@"; do case "$a" in http*) url="$a";; esac; done
[ -n "$url" ] || exit 2
[ "${FAKE_CURL_FAIL:-0}" = "1" ] && exit 22
[ "${FAKE_CURL_BODY:-1}" = "0" ] && exit 0
printf '<!doctype html><html><body>stub</body></html>\n'
EOF
chmod +x "$WORK/bin/curl"
export PATH="$WORK/bin:$PATH"

# 符号链接能力探测
if ln -s "$BASE/incoming" "$BASE/.symlink-probe" 2>/dev/null && [[ -L "$BASE/.symlink-probe" ]]; then
  rm -f "$BASE/.symlink-probe"
  STUBS=""
  echo "环境支持符号链接：使用真实 current 切流"
else
  cat > "$WORK/stubs.sh" <<STUB
swap_current() { echo "\$RELEASES/\$1" > "$BASE/.pointer"; }
current_release_id() { [[ -f "$BASE/.pointer" ]] && basename "\$(cat "$BASE/.pointer")" || true; }
STUB
  STUBS="$WORK/stubs.sh"
  echo "环境不支持符号链接：swap_current 走桩，其余逻辑真实执行"
fi

# 在同一 bash 进程里加载被测脚本（source-only 模式）+ 桩 + 执行给定语句
run_impl() {
  local out rc
  out="$(bash -c '
        set -euo pipefail
        export TH_SOURCE_ONLY=1
        source "'"$IMPL"'"
        [ -n "'"$STUBS"'" ] && source "'"$STUBS"'"
        eval "$1"
      ' _ "$1" 2>&1)" && rc=0 || rc=$?
  LAST="$out"
  return "$rc"
}

expect_ok()   { if run_impl "$2"; then ok "$1"; else bad "$1" "$LAST"; fi; }
expect_fail() { if run_impl "$2"; then bad "$1" "本该失败却成功：$LAST"; else ok "$1"; fi; }

mkbuild() {
  rm -rf "$BASE/incoming"; mkdir -p "$BASE/incoming/assets/js"
  echo "<html>v=$1</html>" > "$BASE/incoming/index.html"
  echo "404 v=$1"          > "$BASE/incoming/404.html"
  echo "js $1"             > "$BASE/incoming/assets/js/main.$1.js"
  echo "pdf $1"            > "$BASE/incoming/assets/file.$1.pdf"
}

echo "--- 门禁 ---"
expect_fail "incoming 为空时拒绝发布"        'activate r1'
mkdir -p "$BASE/incoming"; echo x > "$BASE/incoming/index.html"; echo y > "$BASE/incoming/404.html"
expect_fail "文件数低于 MIN_FILES 时拒绝"     'activate r1'

echo "--- 首次发布 ---"
mkbuild v1
expect_ok "激活 v1" 'activate 20260101T000001Z-aaaa0001'

echo "--- 冒烟失败自动回滚 ---"
mkbuild v2
expect_fail "v2 冒烟失败必须回滚并非零退出" 'export FAKE_CURL_FAIL=1; activate 20260101T000002Z-aaaa0002'
grep -q '自动回滚 -> 20260101T000001Z-aaaa0001' <<<"$LAST" \
  && ok "日志确认已切回 v1" || bad "日志确认已切回 v1" "$LAST"

echo "--- 连续发布与 prune ---"
mkbuild v3; expect_ok "激活 v3" 'activate 20260101T000003Z-aaaa0003'
mkbuild v4; expect_ok "激活 v4" 'activate 20260101T000004Z-aaaa0004'
n=$(find "$BASE/releases" -mindepth 1 -maxdepth 1 -type d -not -name '.staging-*' | wc -l)
[[ "$n" -le 3 ]] && ok "KEEP=2 生效（残留 $n 份）" || bad "KEEP=2 生效" "残留 $n 份"

echo "--- 定向回退与幂等保护 ---"
expect_ok "--use 回到 v3" 'switch_to 20260101T000003Z-aaaa0003'
expect_fail "重复 release id 必须拒绝" 'activate 20260101T000003Z-aaaa0003'

echo "--- 硬链接 release 的内容独立性 ---"
mkbuild v5; expect_ok "激活 v5" 'activate 20260101T000005Z-aaaa0005'
mkbuild v6; expect_ok "激活 v6" 'activate 20260101T000006Z-aaaa0006'
if [[ -e "$BASE/releases/20260101T000005Z-aaaa0005/index.html" ]] \
   && grep -q 'v=v5' "$BASE/releases/20260101T000005Z-aaaa0005/index.html" \
   && grep -q 'v=v6' "$BASE/releases/20260101T000006Z-aaaa0006/index.html"; then
  ok "旧 release 内容未被新构建覆盖（incoming 重灌后仍独立）"
else
  bad "旧 release 内容未被新构建覆盖" "$(ls -l "$BASE/releases" 2>&1)"
fi

echo "--- 审计信息 ---"
[[ -s "$BASE/shared/deploy-info.json" ]] && ok "shared/deploy-info.json 已写入" || bad "shared/deploy-info.json 已写入"

echo
printf '自检结果: %d passed, %d failed\n' "$pass" "$failn"
exit "$((failn > 0))"
