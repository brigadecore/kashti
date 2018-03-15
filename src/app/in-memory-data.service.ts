import { InMemoryDbService } from 'angular-in-memory-web-api';
import { projectsBuilds } from './mock/projects-builds';
import { projects } from './mock/projects';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { projectsBuilds, projects };
  }
}
