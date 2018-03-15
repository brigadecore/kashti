import { InMemoryDbService } from 'angular-in-memory-web-api';
import { projectsBuilds } from './mock/projects-builds';
import { projects } from './mock/projects';
import { builds } from './mock/builds';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { projectsBuilds, projects, builds };
  }
}
