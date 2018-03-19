import { Project } from './Project';
import { Repo } from './Repo';
import { Kubernetes } from './Kubernetes';
import { LastBuild } from './LastBuild';

export interface ProjectsBuild {
  project: Project;
  lastBuild?: LastBuild;
}
