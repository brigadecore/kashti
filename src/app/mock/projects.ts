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
  }
];
