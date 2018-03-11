import { InMemoryDbService } from 'angular-in-memory-web-api';
import { projectBuilds } from './mock/project-builds';
import { projects } from './mock/projects';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { projectBuilds, projects };
  }
}
