import { Project } from './project';
import { Repo } from './repo';
import { Kubernetes } from './kubernetes';
import { LastBuild } from './last-build';

export interface ProjectsBuild {
  project: Project;
  lastBuild?: LastBuild;
}
