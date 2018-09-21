#! /usr/bin/env bash
npm i
npm run build
git add . 
git commit -m build
git push origin master
