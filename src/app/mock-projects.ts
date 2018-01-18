import { Project } from './models/project';

const failedBuild = {
  id: 'buildId1234444',
  project_id: 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
  type: 'pull_request',
  provider: 'github',
  commit: 'ad0703ac08e80448764b34dc089d0f73a1242ae9',
  worker: {
    id: 'workerId999999999',
    build_id: 'buildId1234444',
    start_time: new Date('January 17, 2018 03:24:00'),
    end_time: new Date('January 17, 2018 03:31:00'),
    exit_code: 1,
    status: 'Failed'
  }
};

const successfulBuild = {
  id: 'buildId999123',
  project_id: 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
  type: 'pull_request',
  provider: 'github',
  commit: 'e744c3ad736f8b3fec067c05f9620e7f401b2bbf',
  worker: {
    id: 'workerId999999999',
    build_id: 'buildId1234444',
    start_time: new Date('January 15, 2018 03:24:00'),
    end_time: new Date('January 15, 2018 03:31:00'),
    exit_code: 0,
    status: 'Success'
  }
};

export const PROJECTS: Project[] = [
  { id: 'projectid123', name: 'technosophos/coffeesnob', lastBuild: failedBuild },
  { id: 'projectid1234', name: 'technosophos/ulid', lastBuild: failedBuild },
  { id: 'projectid12345', name: 'technosophos/brigade-trello', lastBuild: failedBuild },
  { id: 'projectid123456', name: 'deis/empty-testbed', lastBuild: successfulBuild },
  { id: 'projectid1234567', name: 'technosophos/twitter-t', lastBuild: failedBuild },
  { id: 'projectid1234568', name: 'Azure/kashti', lastBuild: successfulBuild }
];
