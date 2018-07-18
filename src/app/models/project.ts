import { Repo } from './repo';
import { Kubernetes } from './kubernetes';
import { Worker } from './worker';

export interface Project {
  id: string;
  name: string;
  repo: Repo;
  defaultScript: string;
  kubernetes: Kubernetes;
  github: any;
  secrets: any;
  worker: Worker;
}
