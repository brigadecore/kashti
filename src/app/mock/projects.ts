import { Project } from '../models/project';

export const Projects: Project[] = [
  {
    id: 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
    name: 'kashti/localdev',
    repo: {
      name: 'github.com/kashti/localdev',
      cloneURL: 'https://github.com/kashti/localdev.git'
    },
    defaultScript: '',
    kubernetes: {
      namespace: 'default',
      vcsSidecar: '',
      buildStorageSize: '50Mi'
    },
    github: {
      baseURL: '',
      uploadURL: ''
    },
    secrets: {},
    worker: {
      registry: '',
      name: '',
      tag: '',
      pullPolicy: ''
    }
  },
  {
    id: 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
    name: 'deis/dev-empty-testbed',
    repo: {
      name: 'github.com/deis/dev-empty-testbed',
      cloneURL: 'https://github.com/deis/dev-empty-testbed.git'
    },
    defaultScript: '',
    kubernetes: {
      namespace: 'default',
      vcsSidecar: '',
      buildStorageSize: '50Mi'
    },
    github: {
      baseURL: '',
      uploadURL: ''
    },
    secrets: {
      SLACK_WEBHOOK: 'REDACTED',
      dbPassword: 'REDACTED'
    },
    worker: {
      registry: '',
      name: '',
      tag: '',
      pullPolicy: ''
    }
  },
];
