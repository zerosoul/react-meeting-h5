#!/bin/bash

export BUILD_DIR=dist
export BUILD_TYPE=front
export TARGET_PATH=/data/www/FRONTEND/react-meeting-h5

build_functions=/usr/bin/build-functions
if [ -f "$build_functions" ]; then
    . $build_functions
else
    PUBLIC_URL=h5 npm install --production && npm run build
fi
