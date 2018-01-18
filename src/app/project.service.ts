import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from './models/project';
import { PROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

}
