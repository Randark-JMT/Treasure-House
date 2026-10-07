#!/usr/bin/env bash
# 部署前内容门禁：宁可让流水线变红，也不能把残缺或泄露的产物推到线上
set -euo pipefail

BUILD_DIR="${1:-build}"
MIN_FILES="${MIN_FILES:-300}"
EXPECTED_URL="${EXPECTED_URL:-}"   # 例：https://treasure-house.randark.site

fail() { echo "::error::$*"; exit 1; }
warn() { echo "::warning::$*"; }

[[ -d "$BUILD_DIR" ]] || fail "缺少构建目录 $BUILD_DIR"
[[ -f "$BUILD_DIR/index.html" ]] || fail "$BUILD_DIR/index.html 缺失"
[[ -f "$BUILD_DIR/404.html" ]] || warn "$BUILD_DIR/404.html 缺失（nginx error_page 会退化为内置 404）"

FILE_COUNT="$(find "$BUILD_DIR" -type f | wc -l)"
[[ "$FILE_COUNT" -ge "$MIN_FILES" ]] || fail "构建产物仅 $FILE_COUNT 个文件，少于阈值 $MIN_FILES，疑似构建中断"

# 仓库 .gitignore 排除的敏感文章绝不能出现在部署产物里
SENSITIVE_PATHS=(
  "TrendMicro-VisionOne-Trial"
  "TrendMicro-VisionOne-Use"
)
for s in "${SENSITIVE_PATHS[@]}"; do
  if find "$BUILD_DIR" -maxdepth 3 -iname "*${s}*" | grep -q .; then
    fail "构建产物中包含敏感目录片段：${s}（.gitignore 已排除，CI 环境出现说明 checkout 被污染）"
  fi
done

# 私钥 / 常见 token 形态
if grep -rEnI --include='*' \
  -e 'BEGIN (RSA|OPENSSH|EC|DSA|PGP) PRIVATE KEY' \
  -e '-----BEGIN PRIVATE KEY-----' \
  -e 'ghp_[A-Za-z0-9]{36}' \
  -e 'github_pat_[A-Za-z0-9_]{20,}' \
  -e 'AKIA[0-9A-Z]{16}' \
  -e 'xox[baprs]-[0-9A-Za-z-]{10,}' \
  "$BUILD_DIR" | grep -v '^$'; then
  fail "构建产物中检测到疑似私钥或令牌，已阻断部署"
fi

# 意外混入 VCS / 环境文件
for f in "$BUILD_DIR"/.git "$BUILD_DIR"/.env "$BUILD_DIR"/node_modules; do
  [[ -e "$f" ]] && fail "构建产物中存在 $f，不应对外发布"
done

# canonical / sitemap 与配置 url 对齐，避免切站后搜索引擎仍指向 Pages
if [[ -n "$EXPECTED_URL" ]]; then
  if [[ -f "$BUILD_DIR/sitemap.xml" ]] && ! grep -q "$EXPECTED_URL" "$BUILD_DIR/sitemap.xml"; then
    fail "sitemap.xml 未包含 $EXPECTED_URL，请修正 docusaurus.config.js 的 url"
  fi
  if grep -rq '185.199\|github\.io' "$BUILD_DIR"/*.html 2>/dev/null; then
    warn "HTML 中仍残留 GitHub Pages 相关绝对地址，请检查 url 配置"
  fi
fi

SIZE_KB="$(du -sk "$BUILD_DIR" | cut -f1)"
echo "build gate ok: files=$FILE_COUNT size=$((SIZE_KB / 1024))MB"
if [[ "$SIZE_KB" -gt 262144 ]]; then
  warn "构建产物 $((SIZE_KB / 1024))MB，超过 256MB，rsync 首次全量耗时会明显变长"
fi
