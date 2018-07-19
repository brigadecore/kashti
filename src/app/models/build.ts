import { BuildWorker } from './build-worker';
import { Revision } from './revision';

export interface Build {
  id: string;
  project_id: string;
  type: string;
  provider: string;
  revision: Revision;
  payload?: string;
  script?: string;
  worker?: BuildWorker;
}
