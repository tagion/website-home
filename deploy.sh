#!/usr/bin/env sh

IS_STAGE="stage"

if [ $1 == $IS_STAGE ];
then
echo 'Deploying to stage.tagion.org...'
else
echo 'Deploying to tagion.org...'
fi

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
if [ $1 == $IS_STAGE ];
then
echo 'stage.tagion.org' > CNAME
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
