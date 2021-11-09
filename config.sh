#!/usr/bin/env sh

IS_STAGE="staging"

# Abort on errors
set -e

# Navigate into the build output directory
cd docs/.vuepress/dist

# If you are deploying to a custom domain
if [ "$1" == "$IS_STAGE" ];
then
echo 'staging.tagion.com' > CNAME

echo 'User-agent: *' > robots.txt
echo 'Disallow: *' >> robots.txt
else
echo 'tagion.com' > CNAME
fi