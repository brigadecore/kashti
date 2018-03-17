import { BuildWorker } from './BuildWorker';
import { Revision } from './Revision';

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
