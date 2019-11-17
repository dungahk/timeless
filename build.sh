#!/bin/sh

# TypeScript Dist folder
rm -r tsc || echo "tsc didn't exist"
mkdir tsc

# TypeScript Build
yarn build

# Dist folder
rm -r dist || echo "dist didn't exist"
mkdir dist

# Manifest
cp src/assets/manifest.json dist/manifest.json

# Icon
cp src/assets/timeless.png dist/timeless.png

# Styles
cat src/styles/*.css > dist/timeless.css

# Content Scripts
yarn -s uglifyjs tsc/util/*.js tsc/content/*.js --compress --mangle > dist/timeless-content.js
