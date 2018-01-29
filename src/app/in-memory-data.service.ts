import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const failedBuild = {
      id: 'buildId1234444',
      project_id:
        'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
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
      project_id:
        'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
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

    const activeBuild = {
      id: 'buildId999123',
      project_id:
        'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
      type: 'pull_request',
      provider: 'github',
      commit: 'e744c3ad736f8b3fec067c05f9620e7f401b2bbf',
      worker: {
        id: 'workerId999999999',
        build_id: 'buildId1234444',
        start_time: new Date('January 15, 2018 03:24:00'),
        end_time: new Date('January 15, 2018 03:31:00'),
        exit_code: 0,
        status: 'Active'
      }
    };

    const unknownBuildStatus = {
      id: 'buildId999123',
      project_id:
        'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
      type: 'pull_request',
      provider: 'github',
      commit: 'e744c3ad736f8b3fec067c05f9620e7f401b2bbf',
      worker: {
        id: 'workerId999999999',
        build_id: 'buildId1234444',
        start_time: new Date('January 15, 2018 03:24:00'),
        end_time: new Date('January 15, 2018 03:31:00'),
        exit_code: 256,
        status: 'foobarbaz'
      }
    };

    const projects = [
        {
          id: 'projectid123',
          name: 'technosophos/coffeesnob',
          repo: {
            name: 'github.com/technosophos/coffeesnob',
            cloneURL: 'https://github.com/technosophos/coffeesnob.git'
          },
          kubernetes: {
            namespace: 'default',
            vcsSidecar: ''
          },
          github: {},
          secrets: {},
          lastBuild: successfulBuild
        },
        {
          id: 'projectid1234',
          name: 'technosophos/ulid',
          repo: {
            name: 'github.com/technosophos/ulid',
            cloneURL: 'https://github.com/technosophos/ulid.git'
          },
          kubernetes: {
            namespace: 'default',
            vcsSidecar: ''
          },
          github: {},
          secrets: {},
          lastBuild: failedBuild
        },
        {
          id: 'projectid12345',
          name: 'technosophos/brigade-trello',
          repo: {
            name: 'github.com/technosophos/brigade-trello',
            cloneURL: 'https://github.com/technosophos/brigade-trello.git'
          },
          kubernetes: {
            namespace: 'default',
            vcsSidecar: ''
          },
          github: {},
          secrets: {},
          lastBuild: activeBuild
        },
        {
          id: 'projectid123456',
          name: 'deis/empty-testbed',
          repo: {
            name: 'github.com/technosophos/empty-testbed',
            cloneURL: 'https://github.com/technosophos/empty-testbed.git'
          },
          kubernetes: {
            namespace: 'default',
            vcsSidecar: ''
          },
          github: {},
          secrets: {},
          lastBuild: activeBuild
        },
        {
          id: 'projectid1234567',
          name: 'technosophos/twitter-t',
          repo: {
            name: 'github.com/technosophos/twitter-t',
            cloneURL: 'https://github.com/technosophos/twitter-t.git'
          },
          kubernetes: {
            namespace: 'default',
            vcsSidecar: ''
          },
          github: {},
          secrets: {},
          lastBuild: unknownBuildStatus
        },
        {
          id: 'projectid1234568',
          name: 'Azure/kashti',
          repo: {
            name: 'github.com/Azure/kashti',
            cloneURL: 'https://github.com/Azure/kashti.git'
          },
          kubernetes: {
            namespace: 'default',
            vcsSidecar: ''
          },
          github: {},
          secrets: {},
          lastBuild: successfulBuild
        }
    ];
    return { projects };
  }
}
