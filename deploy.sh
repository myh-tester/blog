#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf doc_build/

# 生成静态文件
pnpm run build

# 进入生成的文件夹
cd doc_build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:myh-tester/blog.git main:gh-pages

cd -