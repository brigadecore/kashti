export const projectBuilds = [
  {
    'project': {
      'id': 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
      'name': 'technosophos/coffeesnob',
      'repo': {
        'name': 'github.com/technosophos/coffeesnob',
        'cloneURL': 'https://github.com/technosophos/coffeesnob.git'
      },
      'defaultScript': '',
      'kubernetes': {
        'namespace': 'default',
        'vcsSidecar': '',
        'buildStorageSize': '50Mi'
      },
      'github': {
        'baseURL': '',
        'uploadURL': ''
      },
      'secrets': {},
      'worker': {
        'registry': '',
        'name': '',
        'tag': '',
        'pullPolicy': ''
      }
    },
    'lastBuild': {
      'id': '01c0matkmjpjkrbfcnhfyjerfh',
      'project_id': 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
      'type': 'pull_request',
      'provider': 'github',
      'revision': {
        'commit': 'a2e68c',
        'ref': 'master'
      },
      'payload': '',
      'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1bGxfcmVxdWVzdCIpLCAoZSwgcCkgPT4gewogIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZS5wYXlsb2FkKSkKfSk7Cg==',
      'worker': {
        'id': 'brigade-worker-01c0matkmjpjkrbfcnhfyjerfh-ad0703ac',
        'build_id': '01c0matkmjpjkrbfcnhfyjerfh',
        'project_id': 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
        'start_time': '2017-12-23T07:32:08Z',
        'end_time': '2017-12-23T07:32:21Z',
        'exit_code': 1,
        'status': 'Failed'
      }
    }
  },
  {
    'project': {
      'id': 'brigade-455e0b882e798304cf2773a8f62b472e26b1619b858c1d8ce520d5',
      'name': 'technosophos/ulid',
      'repo': {
        'name': 'github.com/technosophos/ulid',
        'cloneURL': 'https://github.com/technosophos/ulid.git'
      },
      'defaultScript': '',
      'kubernetes': {
        'namespace': 'default',
        'vcsSidecar': '',
        'buildStorageSize': '50Mi'
      },
      'github': {
        'baseURL': '',
        'uploadURL': ''
      },
      'secrets': {
        'ghToken': 'REDACTED'
      },
      'worker': {
        'registry': '',
        'name': '',
        'tag': '',
        'pullPolicy': ''
      }
    },
    'lastBuild': {
      'id': '01c0cv49e4s6z5mmye0acfbzme',
      'project_id': 'brigade-455e0b882e798304cf2773a8f62b472e26b1619b858c1d8ce520d5',
      'type': 'push',
      'provider': 'github',
      'revision': {
        'commit': '',
        'ref': ''
      },
      'payload': '',
      'worker': {
        'id': 'brigade-worker-01c0cv49e4s6z5mmye0acfbzme-98b01cc3',
        'build_id': '01c0cv49e4s6z5mmye0acfbzme',
        'project_id': 'brigade-455e0b882e798304cf2773a8f62b472e26b1619b858c1d8ce520d5',
        'start_time': '2017-12-23T07:31:47Z',
        'end_time': '2017-12-23T07:33:19Z',
        'exit_code': 1,
        'status': 'Failed'
      }
    }
  },
  {
    'project': {
      'id': 'brigade-635e505c74ad679bb9144d19950504fbe86b136ac3770bcff51ac6',
      'name': 'technosophos/brigade-trello',
      'repo': {
        'name': 'github.com/technosophos/brigade-trello',
        'cloneURL': 'https://github.com/technosophos/brigade-trello.git'
      },
      'defaultScript': '',
      'kubernetes': {
        'namespace': 'default',
        'vcsSidecar': '',
        'buildStorageSize': '50Mi'
      },
      'github': {
        'baseURL': '',
        'uploadURL': ''
      },
      'secrets': {
        'SLACK_WEBHOOK': 'REDACTED',
        'cosmosKey': 'REDACTED',
        'cosmosName': 'REDACTED',
        'trelloKey': 'REDACTED',
        'trelloModel': 'REDACTED',
        'trelloToken': 'REDACTED'
      },
      'worker': {
        'registry': '',
        'name': '',
        'tag': '',
        'pullPolicy': ''
      }
    },
    'lastBuild': null
  },
  {
    'project': {
      'id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
      'name': 'deis/empty-testbed',
      'repo': {
        'name': 'github.com/deis/empty-testbed',
        'cloneURL': 'https://github.com/deis/empty-testbed.git'
      },
      'defaultScript': '',
      'kubernetes': {
        'namespace': 'default',
        'vcsSidecar': '',
        'buildStorageSize': '50Mi'
      },
      'github': {
        'baseURL': '',
        'uploadURL': ''
      },
      'secrets': {
        'SLACK_WEBHOOK': 'REDACTED',
        'dbPassword': 'REDACTED'
      },
      'worker': {
        'registry': '',
        'name': '',
        'tag': '',
        'pullPolicy': ''
      }
    },
    'lastBuild': {
      'id': '01bzzn45f0p5bjtsffw9m8chts',
      'project_id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
      'type': 'exec',
      'provider': 'brigade-cli',
      'revision': {
        'commit': '',
        'ref': ''
      },
      'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIikKCmV2ZW50cy5vbigiZXhlYyIsICgpID0+IHsKICBjb25zdCBkaW5kID0gbmV3IEpvYigiZGluZCIsICJkb2NrZXI6ZWRnZS1kaW5kIikKICBkaW5kLnByaXZpbGVnZWQgPSB0cnVlCiAgZGluZC50YXNrcyA9IFsKICAgICJkb2NrZXJkLWVudHJ5cG9pbnQuc2ggJiIsCiAgICAiZWNobyB3YWl0aW5nICYmIHNsZWVwIDIwIiwKICAgICJwcyAtZWYiLAogICAgImRvY2tlciB2ZXJzaW9uIiwKICAgICJraWxsYWxsIGRvY2tlcmQiCiAgXQogIGRpbmQucnVuKCkudGhlbiggKCkgPT4gewogICAgY29uc29sZS5sb2coIj09PT0gRE9ORSA9PT09IikKICB9KQp9KQo=',
      'worker': {
        'id': 'brigade-worker-01bzzn45f0p5bjtsffw9m8chts-master',
        'build_id': '01bzzn45f0p5bjtsffw9m8chts',
        'project_id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
        'start_time': '2017-12-23T07:31:48Z',
        'end_time': '2017-12-23T07:32:36Z',
        'exit_code': 0,
        'status': 'Succeeded'
      }
    }
  },
  {
    'project': {
      'id': 'brigade-cf0858d449971e79083aacddc565450b8bf65a2b9f5d66ea76fdb4',
      'name': 'technosophos/twitter-t',
      'repo': {
        'name': 'github.com/technosophos/twitter-t',
        'cloneURL': 'https://github.com/technosophos/twitter-t.git'
      },
      'defaultScript': '',
      'kubernetes': {
        'namespace': 'default',
        'vcsSidecar': '',
        'buildStorageSize': '50Mi'
      },
      'github': {
        'baseURL': '',
        'uploadURL': ''
      },
      'secrets': {
        'ACCESS_SECRET': 'REDACTED',
        'ACCESS_TOKEN': 'REDACTED',
        'CONSUMER_KEY': 'REDACTED',
        'CONSUMER_SECRET': 'REDACTED',
        'OWNER': 'REDACTED'
      },
      'worker': {
        'registry': '',
        'name': '',
        'tag': '',
        'pullPolicy': ''
      }
    },
    'lastBuild': null
  },
  {
    'project': {
      'id': 'brigade-fa34fe5c2ef16cc4f35dd772602dd7476fca6366626be26d7893cb',
      'name': 'Azure/kashti',
      'repo': {
        'name': 'github.com/Azure/kashti',
        'cloneURL': 'https://github.com/Azure/kashti.git'
      },
      'defaultScript': '',
      'kubernetes': {
        'namespace': 'default',
        'vcsSidecar': '',
        'buildStorageSize': '50Mi'
      },
      'github': {
        'baseURL': '',
        'uploadURL': ''
      },
      'secrets': {},
      'worker': {
        'registry': '',
        'name': '',
        'tag': '',
        'pullPolicy': ''
      }
    },
    'lastBuild': {
      'id': '01c0hx5s1gh7a0tzbja2eyg7r1',
      'project_id': 'brigade-fa34fe5c2ef16cc4f35dd772602dd7476fca6366626be26d7893cb',
      'type': 'build',
      'provider': 'brigade-cli',
      'revision': {
        'commit': '',
        'ref': ''
      },
      'script': 'Y29uc3QgeyBldmVudHMsIEpvYiwgR3JvdXAgfSA9IHJlcXVpcmUoImJyaWdhZGllciIpOwoKZXZlbnRzLm9uKCJidWlsZCIsIChlLCBwKSA9PiB7CgogIC8vIFRoaXMgaXMganVzdCBhIGNhbmFyeSBidWlsZCB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyBpcyB3b3JraW5nLgogIGNvbnN0IGJ1aWxkID0gbmV3IEpvYigiYnVpbGQiLCAibm9kZTo4IikKICBidWlsZC50YXNrcyA9IFsKICAgICJjZCAvc3JjIiwKICAgICJ5YXJuIGluc3RhbGwiLAogICAgInlhcm4gZ3VscCBidWlsZCIKICBdCgogIGJ1aWxkLnJ1bigpCgp9KTsKCmV2ZW50cy5vbigiZXhlYyIsIChlLCBwKSA9PiB7CiAgLy8gVGhpcyBkb2VzIHNvbWUgcG9pbnRsZXNzbHkgY29tcGxleCBzdHVmZiBzbyB0aGF0IHlvdSBjYW4gdGVzdCB0aGUKICAvLyBkYXNoYm9hcmQuCiAgdmFyIGoxID0gYWxwaW5lSm9iKCJvbmUiKQogIHZhciBqMiA9IGFscGluZUpvYigidHdvIikKICB2YXIgajMgPSBhbHBpbmVKb2IoInRocmVlIikKICB2YXIgajQgPSBhbHBpbmVKb2IoImZvdXIiKQogIHZhciBqNSA9IGFscGluZUpvYigiZml2ZSIpCgogIGoxLnJ1bigpLnRoZW4oICgpID0+IHsgcmV0dXJuIGoyLnJ1bigpIH0pLnRoZW4oICgpID0+IHsKICAgIHZhciBnID0gbmV3IEdyb3VwKCkKICAgIGcuYWRkKGozKQogICAgZy5hZGQoajQpCiAgICBnLnJ1bkFsbCgpLnRoZW4oICgpID0+IHtqNS5ydW4oKX0pCiAgfSkKfSk7CgpmdW5jdGlvbiBhbHBpbmVKb2IobmFtZSkgewogIHJldHVybiBuZXcgSm9iKG5hbWUsICJhbHBpbmU6My43IiwgWyJlY2hvIGhlbGxvIGZyb20gIiArIG5hbWUsICJzbGVlcCA1Il0pCn0K'
    }
  }
]