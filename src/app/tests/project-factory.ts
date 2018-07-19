import * as Factory from 'factory.ts';
import { Project } from '../models/project';

export const ProjectFactory = Factory.makeFactory<Project>({
  id: 'brigade-1234',
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
});
