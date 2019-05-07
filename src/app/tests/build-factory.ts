import * as Factory from 'factory.ts';
import { Build } from '../models/build';
import { JobStatus } from '../models/job';

export const BuildFactory = Factory.makeFactory<Build>({
  id: 'buildid1234',
  project_id: 'brigade-1234',
  type: 'push',
  provider: 'github',
  revision: {
    commit: '',
    ref: ''
  },
  payload: '',
  script: '',
  worker: {
    id: 'brigade-worker-01c0mar8tk6daeabj7fhmcskc6-ad0703ac',
    build_id: '01c0mar8tk6daeabj7fhmcskc6',
    project_id:
      'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
    start_time: '2018-02-26T22:57:27Z',
    end_time: '2018-02-26T22:57:35Z',
    exit_code: 1,
    status: JobStatus.Failed
  }
});
