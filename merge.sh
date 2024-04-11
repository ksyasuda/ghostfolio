#!/usr/bin/env bash

if git fetch upstream; then
  echo "Fetched upstream"
  git checkout main
  echo "Merging upstream/main into main"
  git merge upstream/main --no-edit
  echo "Pushing to origin/main"
  git push origin main
  echo "Done"
else
  echo "Failed to fetch upstream"
fi
