import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { ProjectBuild, Project } from './models/project';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {}

  getProjectBuilds(): Observable<ProjectBuild[]> {
    let projectBuildsUrl;

    if (environment.production) {
      projectBuildsUrl = `${environment.brigadeApiHost}/v1/projects-build`;
    } else {
      projectBuildsUrl = `${environment.brigadeApiHost}/v1/projectsBuilds`;
    }

    return this.http
      .get<ProjectBuild[]>(projectBuildsUrl, httpOptions);
  }

  getProject(projectId) {
    let projectUrl;

    if (environment.production) {
      projectUrl = `${environment.brigadeApiHost}/v1/project/${projectId}`;
    } else {
      projectUrl = `${environment.brigadeApiHost}/v1/projects/${projectId}`;
    }
    return this.http.get(projectUrl, httpOptions);
  }
}
