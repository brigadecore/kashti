import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../../environments/environment.prod';
import { ProjectBuild, Project } from '../../models/project';
import { ProjectService } from './ProjectService';
import { BRIGADE_API_HOST } from '../../app.config';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class ApiProjectService implements ProjectService {

  constructor(private http: HttpClient) {}

  getProjectBuilds(): Observable<ProjectBuild[]> {
    let projectBuildsUrl = `${BRIGADE_API_HOST}/v1/projects-build`;

    return this.http
      .get<ProjectBuild[]>(projectBuildsUrl, httpOptions);
  }

  getProject(projectId): Observable<Project> {
    let projectUrl = `${BRIGADE_API_HOST}/v1/project/${projectId}`;

    return this.http.get<Project>(projectUrl, httpOptions);
  }
}
