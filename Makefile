SHELL ?= /bin/bash

.DEFAULT_GOAL := build

################################################################################
# Version details                                                              #
################################################################################

# This will reliably return the short SHA1 of HEAD or, if the working directory
# is dirty, will return that + "-dirty"
GIT_VERSION = $(shell git describe --always --abbrev=7 --dirty --match=NeVeRmAtCh)

################################################################################
# Containerized development environment-- or lack thereof                      #
################################################################################

ifneq ($(SKIP_DOCKER),true)
	PROJECT_ROOT := $(dir $(realpath $(firstword $(MAKEFILE_LIST))))
	DEV_IMAGE := deis/node-chrome:node12
	DOCKER_CMD := docker run \
		-it \
		--rm \
		-e SKIP_DOCKER=true \
		-v $(PROJECT_ROOT):/code/kashti \
		-w /code/kashti \
		-p 4200:4200 \
		$(DEV_IMAGE)
endif

################################################################################
# Binaries and Docker images we build and publish                              #
################################################################################

ifdef DOCKER_REGISTRY
	DOCKER_REGISTRY := $(DOCKER_REGISTRY)/
endif

ifdef DOCKER_ORG
	DOCKER_ORG := $(DOCKER_ORG)/
endif

BASE_IMAGE_NAME := kashti

ifdef VERSION
	MUTABLE_DOCKER_TAG := latest
else
	VERSION            := $(GIT_VERSION)
	MUTABLE_DOCKER_TAG := edge
endif

IMAGE_NAME         := $(DOCKER_REGISTRY)$(DOCKER_ORG)$(BASE_IMAGE_NAME):$(VERSION)
MUTABLE_IMAGE_NAME := $(DOCKER_REGISTRY)$(DOCKER_ORG)$(BASE_IMAGE_NAME):$(MUTABLE_DOCKER_TAG)

################################################################################
# Utility targets                                                              #
################################################################################

.PHONY: bootstrap
bootstrap: yarn-install

.PHONY: yarn-install
yarn-install:
	$(DOCKER_CMD) yarn install

.PHONY: serve
serve: yarn-install
	$(DOCKER_CMD) yarn serve

.PHONY: yarn-audit
yarn-audit:
	$(DOCKER_CMD) yarn audit

################################################################################
# Tests                                                                        #
################################################################################

.PHONY: lint
lint: yarn-install
	$(DOCKER_CMD) yarn lint

.PHONY: test
test: yarn-install
	$(DOCKER_CMD) yarn test

.PHONY: e2e
e2e: yarn-install
	$(DOCKER_CMD) yarn e2e

################################################################################
# Build / Publish                                                              #
################################################################################

.PHONY: build
build: build-image

.PHONY: build-image
build-image:
	docker build -t $(IMAGE_NAME) .
	docker tag $(IMAGE_NAME) $(MUTABLE_IMAGE_NAME)

.PHONY: push
push: push-image

.PHONY: push-image
push-image: build-image
	docker push $(IMAGE_NAME)
	docker push $(MUTABLE_IMAGE_NAME)
