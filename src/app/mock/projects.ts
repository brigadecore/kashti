import { Project } from '../models/project';

export const projects: Project[] = [
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
    id: 'brigade-455e0b882e798304cf2773a8f62b472e26b1619b858c1d8ce520d5',
    name: 'technosophos/ulid',
    repo: {
      name: 'github.com/technosophos/ulid',
      cloneURL: 'https://github.com/technosophos/ulid.git'
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
      ghToken: 'REDACTED'
    },
    worker: {
      registry: '',
      name: '',
      tag: '',
      pullPolicy: ''
    }
  },
  {
    id: 'brigade-635e505c74ad679bb9144d19950504fbe86b136ac3770bcff51ac6',
    name: 'technosophos/brigade-trello',
    repo: {
      name: 'github.com/technosophos/brigade-trello',
      cloneURL: 'https://github.com/technosophos/brigade-trello.git'
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
      cosmosKey: 'REDACTED',
      cosmosName: 'REDACTED',
      trelloKey: 'REDACTED',
      trelloModel: 'REDACTED',
      trelloToken: 'REDACTED'
    },
    worker: {
      registry: '',
      name: '',
      tag: '',
      pullPolicy: ''
    }
  },
  {
    id: 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
    name: 'deis/empty-testbed',
    repo: {
      name: 'github.com/deis/empty-testbed',
      cloneURL: 'https://github.com/deis/empty-testbed.git'
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
  {
    id: 'brigade-cf0858d449971e79083aacddc565450b8bf65a2b9f5d66ea76fdb4',
    name: 'technosophos/twitter-t',
    repo: {
      name: 'github.com/technosophos/twitter-t',
      cloneURL: 'https://github.com/technosophos/twitter-t.git'
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
      ACCESS_SECRET: 'REDACTED',
      ACCESS_TOKEN: 'REDACTED',
      CONSUMER_KEY: 'REDACTED',
      CONSUMER_SECRET: 'REDACTED',
      OWNER: 'REDACTED'
    },
    worker: {
      registry: '',
      name: '',
      tag: '',
      pullPolicy: ''
    }
  },
  {
    id: 'brigade-fa34fe5c2ef16cc4f35dd772602dd7476fca6366626be26d7893cb',
    name: 'Azure/kashti',
    repo: {
      name: 'github.com/Azure/kashti',
      cloneURL: 'https://github.com/Azure/kashti.git'
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
  }
];
