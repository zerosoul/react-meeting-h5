#!/bin/bash

export BUILD_DIR=build
export BUILD_TYPE=front
export TARGET_PATH=/data/www/FRONTEND/react-meeting-h5

build_functions=/usr/bin/build-functions
if [ -f "$build_functions" ]; then
    . $build_functions
else
    npm install --production && npm run build
fi
