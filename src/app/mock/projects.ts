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
    id: 'brigade-4897c99315be5d2a2403ea33bdcb24f8116dc69613d5917d879d5f',
    name: 'brigadecore/empty-testbed',
    repo: {
      name: 'github.com/brigadecore/empty-testbed',
      cloneURL: 'https://github.com/brigadecore/empty-testbed.git'
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
