export const projects = [
  {
    'id': 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
    'name': 'technosophos/coffeesnob',
    'repo': {
      'name': 'github.com/technosophos/coffeesnob',
      'cloneURL': 'https://github.com/technosophos/coffeesnob.git'
    },
    'kubernetes': {
      'namespace': 'default',
      'vcsSidecar': ''
    },
    'github': {},
    'secrets': {},
    'builds': [
      {
        'id': '01c0cjhn15whdxj72gh4q8qbep',
        'provider': 'github',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1c2giLCAoZSwgcCkgPT4gewp9KTsKCmV2ZW50cy5vbigiZXhlYyIsIChlLCBwKSA9PiB7CiAgdmFyIHRlc3QgPSBuZXcgSm9iKCJ0ZXN0IiwgImdvOjEuOSIpCiAgdmFyIGRlc3QgPSAiJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZWNobm9zb3Bob3MvdWxpZCI7CiAgdGVzdC50YXNrcyA9IFsKICAgICJlY2hvICRHT1BBVEgiCiAgICAibWtkaXIgLXAgIiArIGRlc3QsCiAgICAiY3AgLWEgL3NyYy8qICIgKyBkZXN0LAogICAgImNkICIgKyBkZXN0OwogICAgImdvIGdldCAtdSBnaXRodWIuY29tL2dvbGFuZy9kZXAvY21kL2RlcCIKICAgICJkZXAgdXAiCiAgICAibWFrZSB0ZXN0IgogIF07CgogIHRlc3QucnVuKCkudGhlbiggKHIpID0+IGNvbnNvbGUubG9nKHIudG9TdHJpbmcoKSk7Cn0pOwo=',
        'worker': {
          'id': 'brigade-worker-01c0cjhn15whdxj72gh4q8qbep-master',
          'start_time': '2017-12-23T07:31:49Z',
          'end_time': '2017-12-23T07:31:54Z',
          'exit_code': 0,
          'status': 'Succeeded'
        }
      },
      {
        'id': '01c0cjjfyh0bka256dhm17qv6r',
        'type': 'exec',
        'provider': 'brigade-cli',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1c2giLCAoZSwgcCkgPT4gewp9KTsKCmV2ZW50cy5vbigiZXhlYyIsIChlLCBwKSA9PiB7CiAgdmFyIHRlc3QgPSBuZXcgSm9iKCJ0ZXN0IiwgImdvOjEuOSIpCiAgdmFyIGRlc3QgPSAiJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZWNobm9zb3Bob3MvdWxpZCI7CiAgdGVzdC50YXNrcyA9IFsKICAgICJlY2hvICRHT1BBVEgiLAogICAgIm1rZGlyIC1wICIgKyBkZXN0LAogICAgImNwIC1hIC9zcmMvKiAiICsgZGVzdCwKICAgICJjZCAiICsgZGVzdCwKICAgICJnbyBnZXQgLXUgZ2l0aHViLmNvbS9nb2xhbmcvZGVwL2NtZC9kZXAiLAogICAgImRlcCB1cCIsCiAgICAibWFrZSB0ZXN0IgogIF07CgogIHRlc3QucnVuKCkudGhlbiggKHIpID0+IGNvbnNvbGUubG9nKHIudG9TdHJpbmcoKSk7Cn0pOwo=',
        'worker': {
          'id': 'brigade-worker-01c0cjjfyh0bka256dhm17qv6r-master',
          'start_time': '2017-12-23T07:32:05Z',
          'end_time': '2017-12-23T07:32:31Z',
          'exit_code': 1,
          'status': 'Failed'
        }
      }
    ]
  },
  {
    'id': 'brigade-455e0b882e798304cf2773a8f62b472e26b1619b858c1d8ce520d5',
    'name': 'technosophos/ulid',
    'repo': {
      'name': 'github.com/technosophos/ulid',
      'cloneURL': 'https://github.com/technosophos/ulid.git'
    },
    'kubernetes': {
      'namespace': 'default',
      'vcsSidecar': ''
    },
    'github': {},
    'secrets': {
      'ghToken': 'REDACTED'
    },
    builds: [
      {
        'id': '01c0cjhn15whdxj72gh4q8qbep',
        'provider': 'brigade-cli',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1c2giLCAoZSwgcCkgPT4gewp9KTsKCmV2ZW50cy5vbigiZXhlYyIsIChlLCBwKSA9PiB7CiAgdmFyIHRlc3QgPSBuZXcgSm9iKCJ0ZXN0IiwgImdvOjEuOSIpCiAgdmFyIGRlc3QgPSAiJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZWNobm9zb3Bob3MvdWxpZCI7CiAgdGVzdC50YXNrcyA9IFsKICAgICJlY2hvICRHT1BBVEgiCiAgICAibWtkaXIgLXAgIiArIGRlc3QsCiAgICAiY3AgLWEgL3NyYy8qICIgKyBkZXN0LAogICAgImNkICIgKyBkZXN0OwogICAgImdvIGdldCAtdSBnaXRodWIuY29tL2dvbGFuZy9kZXAvY21kL2RlcCIKICAgICJkZXAgdXAiCiAgICAibWFrZSB0ZXN0IgogIF07CgogIHRlc3QucnVuKCkudGhlbiggKHIpID0+IGNvbnNvbGUubG9nKHIudG9TdHJpbmcoKSk7Cn0pOwo=',
        'worker': {
          'id': 'brigade-worker-01c0cjhn15whdxj72gh4q8qbep-master',
          'start_time': '2017-12-23T07:31:49Z',
          'end_time': '2017-12-23T07:31:54Z',
          'exit_code': 0,
          'status': 'Succeeded'
        }
      },
      {
        'id': '01c0cjjfyh0bka256dhm17qv6r',
        'type': 'exec',
        'provider': 'brigade-cli',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1c2giLCAoZSwgcCkgPT4gewp9KTsKCmV2ZW50cy5vbigiZXhlYyIsIChlLCBwKSA9PiB7CiAgdmFyIHRlc3QgPSBuZXcgSm9iKCJ0ZXN0IiwgImdvOjEuOSIpCiAgdmFyIGRlc3QgPSAiJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZWNobm9zb3Bob3MvdWxpZCI7CiAgdGVzdC50YXNrcyA9IFsKICAgICJlY2hvICRHT1BBVEgiLAogICAgIm1rZGlyIC1wICIgKyBkZXN0LAogICAgImNwIC1hIC9zcmMvKiAiICsgZGVzdCwKICAgICJjZCAiICsgZGVzdCwKICAgICJnbyBnZXQgLXUgZ2l0aHViLmNvbS9nb2xhbmcvZGVwL2NtZC9kZXAiLAogICAgImRlcCB1cCIsCiAgICAibWFrZSB0ZXN0IgogIF07CgogIHRlc3QucnVuKCkudGhlbiggKHIpID0+IGNvbnNvbGUubG9nKHIudG9TdHJpbmcoKSk7Cn0pOwo=',
        'worker': {
          'id': 'brigade-worker-01c0cjjfyh0bka256dhm17qv6r-master',
          'start_time': '2017-12-23T07:32:05Z',
          'end_time': '2017-12-23T07:32:31Z',
          'exit_code': 0,
          'status': 'Succeeded'
        }
      }
    ]
  },
  {
    'id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
    'name': 'deis/empty-testbed',
    'repo': {
      'name': 'github.com/deis/empty-testbed',
      'cloneURL': 'https://github.com/deis/empty-testbed.git'
    },
    'kubernetes': {
      'namespace': 'default',
      'vcsSidecar': ''
    },
    'github': {},
    'secrets': {
      'SLACK_WEBHOOK': 'REDACTED',
      'dbPassword': 'REDACTED'
    },
    builds: [
      {
        'id': '014ce9696ad09894a640359857d91d',
        'provider': 'github',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1c2giLCAoZSwgcCkgPT4gewp9KTsKCmV2ZW50cy5vbigiZXhlYyIsIChlLCBwKSA9PiB7CiAgdmFyIHRlc3QgPSBuZXcgSm9iKCJ0ZXN0IiwgImdvOjEuOSIpCiAgdmFyIGRlc3QgPSAiJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZWNobm9zb3Bob3MvdWxpZCI7CiAgdGVzdC50YXNrcyA9IFsKICAgICJlY2hvICRHT1BBVEgiCiAgICAibWtkaXIgLXAgIiArIGRlc3QsCiAgICAiY3AgLWEgL3NyYy8qICIgKyBkZXN0LAogICAgImNkICIgKyBkZXN0OwogICAgImdvIGdldCAtdSBnaXRodWIuY29tL2dvbGFuZy9kZXAvY21kL2RlcCIKICAgICJkZXAgdXAiCiAgICAibWFrZSB0ZXN0IgogIF07CgogIHRlc3QucnVuKCkudGhlbiggKHIpID0+IGNvbnNvbGUubG9nKHIudG9TdHJpbmcoKSk7Cn0pOwo=',
        'worker': {
          'id': 'brigade-worker-01c0cjhn15whdxj72gh4q8qbep-master',
          'start_time': '2018-02-23T07:31:49Z',
          'end_time': '2018-02-23T07:31:54Z',
          'exit_code': 0,
          'status': 'Succeeded'
        }
      },
      {
        'id': '8f4b1fe3ba0230deba549553306e815c',
        'type': 'exec',
        'provider': 'github',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1c2giLCAoZSwgcCkgPT4gewp9KTsKCmV2ZW50cy5vbigiZXhlYyIsIChlLCBwKSA9PiB7CiAgdmFyIHRlc3QgPSBuZXcgSm9iKCJ0ZXN0IiwgImdvOjEuOSIpCiAgdmFyIGRlc3QgPSAiJEdPUEFUSC9zcmMvZ2l0aHViLmNvbS90ZWNobm9zb3Bob3MvdWxpZCI7CiAgdGVzdC50YXNrcyA9IFsKICAgICJlY2hvICRHT1BBVEgiLAogICAgIm1rZGlyIC1wICIgKyBkZXN0LAogICAgImNwIC1hIC9zcmMvKiAiICsgZGVzdCwKICAgICJjZCAiICsgZGVzdCwKICAgICJnbyBnZXQgLXUgZ2l0aHViLmNvbS9nb2xhbmcvZGVwL2NtZC9kZXAiLAogICAgImRlcCB1cCIsCiAgICAibWFrZSB0ZXN0IgogIF07CgogIHRlc3QucnVuKCkudGhlbiggKHIpID0+IGNvbnNvbGUubG9nKHIudG9TdHJpbmcoKSk7Cn0pOwo=',
        'worker': {
          'id': 'brigade-worker-01c0cjjfyh0bka256dhm17qv6r-master',
          'start_time': '2017-12-23T07:32:05Z',
          'end_time': '2017-12-23T07:32:31Z',
          'exit_code': 1,
          'status': 'Failed'
        }
      }
    ]
  }
];
