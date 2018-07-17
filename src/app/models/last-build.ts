import { BuildWorker } from './build-worker';
import { Revision } from './revision';

export interface LastBuild {
  id: string;
  project_id: string;
  type: string;
  provider: string;
  revision: Revision;
  payload?: string;
  script?: string;
  worker?: BuildWorker;
}
