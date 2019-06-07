# Kashti Release Guide

This document explains how to make a Kashti release.

You must be a Kashti core maintainer to cut a release, as the release process
requires:

- ability to tag master
- access to the Dockerhub org

## Pre-Flight Check

- Check out the `master` branch locally
- Run a `git pull --rebase origin master` (where `origin` is primary repository,
  not your fork)

## Tag and Build the Docker Image

1. Tag the release with `git tag v1.2.3`, where `1.2.3` is the SemVer-compliant version
  number.
2. Execute `git push --tags origin` to push the tags to GitHub

The rest is automated.

## Verify

Verify that your tagged version exists on DockerHub: https://hub.docker.com/r/brigadecore/kashti/

## Write Release Notes

Go to the [releases page](https://github.com/brigadecore/kashti/releases) and edit the notes for your tag.

To generate the changelog, run this command:

```
$ git log --no-merges --pretty=format:'- %s %H (%aN)' HEAD ^$LAST_RELEASE_TAG
```

Following our example above, we'd substitute _$LAST_RELEASE_TAG_ with `1.2.2`.
