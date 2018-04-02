import { Repo } from './Repo';
import { Kubernetes } from './Kubernetes';
import { Worker } from './Worker';

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
