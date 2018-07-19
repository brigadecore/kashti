import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BRIGADE_API_HOST } from '../../app.config';
import { Project } from '../../models/project';
import { ProjectsBuild } from '../../models/projects-build';
import { ProjectService } from './project.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiProjectService implements ProjectService {

  constructor(private http: HttpClient) { }

  getProjectBuilds(): Observable<ProjectsBuild[]> {
    const projectBuildsUrl = `${BRIGADE_API_HOST}/v1/projects-build`;

    return this.http
      .get<ProjectsBuild[]>(projectBuildsUrl, httpOptions);
  }

  getProject(projectId: string): Observable<Project> {
    const projectUrl = `${BRIGADE_API_HOST}/v1/project/${projectId}`;

    return this.http.get<Project>(projectUrl, httpOptions);
  }
}
