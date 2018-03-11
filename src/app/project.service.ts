import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProjectBuild, Project } from './models/project';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {}

  getProjectBuilds(): Observable<ProjectBuild[]> {
    const projectBuildsUrl = 'api/projectBuilds';

    return this.http
      .get<ProjectBuild[]>(projectBuildsUrl, httpOptions);
  }

  getProject(projectId) {
    const projectUrl = `api/projects/${projectId}`;
    return this.http.get(projectUrl, httpOptions);
  }
}
