import { LastBuild } from './last-build';
import { Project } from './project';

export interface ProjectsBuild {
  project: Project;
  lastBuild?: LastBuild;
}
