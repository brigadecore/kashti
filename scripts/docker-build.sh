#!/bin/sh

REGISTRY=${DOCKER_REGISTRY:-$npm_package_registry}
NAME=$npm_package_name
BUILD_TAG=$npm_package_tag

echo "REGISTRY=${REGISTRY}"
echo "NAME=${NAME}"
echo "BUILD_TAG=${BUILD_TAG}"
set -x

docker build -t $REGISTRY/$NAME:amd64-$BUILD_TAG .
docker build -t $REGISTRY/$NAME:arm64v8-$BUILD_TAG . -f Dockerfile.arm64v8
