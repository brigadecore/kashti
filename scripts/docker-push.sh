#!/bin/sh

REGISTRY=${DOCKER_REGISTRY:-$npm_package_registry}
NAME=$npm_package_name
TAG=${TAG:-$(git describe --tags --always)}

echo "REGISTRY=${REGISTRY}"
echo "NAME=${NAME}"
echo "TAG=${TAG}"
set -x

docker push $REGISTRY/$NAME:amd64-$TAG
docker push $REGISTRY/$NAME:arm64v8-$TAG

if [ -d $HOME/.docker/manifests/docker.io_${REGISTRY}_$NAME-$TAG ]; then
  rm -rf $HOME/.docker/manifests/docker.io_${REGISTRY}_$NAME-$TAG
fi

docker manifest create \
  $REGISTRY/$NAME:$TAG \
  $REGISTRY/$NAME:amd64-$TAG \
  $REGISTRY/$NAME:arm64v8-$TAG

docker manifest annotate --os linux --arch amd64 \
  $REGISTRY/$NAME:$TAG \
  $REGISTRY/$NAME:amd64-$TAG

docker manifest annotate --os linux --arch arm64 --variant v8 \
  $REGISTRY/$NAME:$TAG \
  $REGISTRY/$NAME:arm64v8-$TAG

docker manifest push $REGISTRY/$NAME:$TAG
