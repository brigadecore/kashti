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
2. Run a `yarn docker-build && yarn docker-push` (You can use `npm run-script` instead of yarn)
3. Run a `docker tag deis/kashti:latest deis/kashti:1.2.3`, where `1.2.3` is the same
  version as above
4. Run a `docker push deis/kashti:1.2.3` where `1.2.3` is the samve version as above

## Verify

Verify that your tagged version exists on DockerHub: https://hub.docker.com/r/deis/kashti/

## Write Release Notes

Go to the releases page and edit the notes for your tag.

To generate the changelog, run this command:

```
$ git log --no-merges --pretty=format:'- %s %H (%aN)' HEAD ^v1.2.2
```

Substitute the _last release version_ for `1.2.2`.
