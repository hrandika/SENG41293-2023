#!/bin/bash
APP_VERSION="0.0.1"
DOCKER_API="seng-nest-api"

nx build dilagro-api

cp package.json docker/dilagro-api/

tar -cJf docker/dilagro-api/build.tar.xz -C dist/apps/dilagro-api .

cd docker/dilagro-api

docker build -f Dockerfile -t $DOCKER_API:$APP_VERSION .