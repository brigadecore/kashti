import { BuildWorker } from './build-worker';
import { Revision } from './revision';

export interface Build {
  id: string;
  project_id: string;
  type: string;
  provider: string;
  short_title: string;
  long_title: string;
  revision: Revision;
  payload?: string;
  script?: string;
  worker?: BuildWorker;
}
