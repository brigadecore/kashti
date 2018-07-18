import { Revision } from './revision';
import { BuildWorker } from './build-worker';

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
