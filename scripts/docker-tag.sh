#!/bin/sh

REGISTRY=${DOCKER_REGISTRY:-$npm_package_registry}
NAME=$npm_package_name
BUILD_TAG=$npm_package_tag
TAG=${TAG:-$(git describe --tags --always)}

echo "REGISTRY=${REGISTRY}"
echo "NAME=${NAME}"
echo "BUILD_TAG=${BUILD_TAG}"
echo "TAG=${TAG}"
set -x

docker tag $REGISTRY/$NAME:amd64-$BUILD_TAG $REGISTRY/$NAME:amd64-$TAG
docker tag $REGISTRY/$NAME:arm64v8-$BUILD_TAG $REGISTRY/$NAME:arm64v8-$TAG
