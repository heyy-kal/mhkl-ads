#!/bin/bash

# Set variables
REPO_URL="https://github.com/heyy-kal/mhkl-ads.git"
BRANCH="main"

git init

git add .

read -p "Masukkan pesan commit: " COMMIT_MESSAGE
git commit -m "first commit"

git remote add origin https://github.com/heyy-kal/mhkl-ads.git

# Push ke GitHub
git branch -M $BRANCH
git push -u origin $BRANCH