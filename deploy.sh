#!/usr/bin/env sh

IS_STAGE="stage"

# abort on errors
set -e

# build
if [ $1 == $IS_STAGE ];
then
echo 'Deploying to stage.tagion.org...'
npm run build:stage
else
echo 'Deploying to tagion.org...'
npm run build
fi

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
if [ $1 == $IS_STAGE ];
then
echo 'stage.tagion.org' > CNAME

echo 'User-agent: *' > robots.txt
echo 'Disallow: *' >> robots.txt
else
echo 'tagion.org' > CNAME
fi

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
if [ $1 == $IS_STAGE ];
then
git push -f https://github.com/tagion/homepage.stage.git master:gh-pages
else
git push -f https://github.com/tagion/homepage.git master:gh-pages
fi

cd -
