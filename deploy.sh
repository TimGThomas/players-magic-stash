#!/bin/bash
 
grunt build:dist
cd dist
git init
git add .
git commit -m "Site updated"
git remote add origin git@github.com:TimGThomas/players-magic-stash.git
git push origin master:refs/heads/gh-pages --force
rm -rf .git
cd ..