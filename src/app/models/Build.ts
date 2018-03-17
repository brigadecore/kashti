import { Revision } from './Revision';
import { BuildWorker } from './BuildWorker';

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
