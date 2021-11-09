#!/usr/bin/env sh

echo 'staging.tagion.com' > docs/.vuepress/dist/CNAME

echo 'User-agent: *' > docs/.vuepress/dist/robots.txt
echo 'Disallow: *' >> docs/.vuepress/dist/robots.txt