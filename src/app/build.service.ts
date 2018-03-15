import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { Build } from './models/project';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BuildService {
  constructor(private http: HttpClient) {}

  getBuilds(projectId) {
    let buildsUrl;
    if (environment.production) {
      buildsUrl = `${environment.brigadeApiHost}/v1/project/${projectId}/builds`;
    } else {
      buildsUrl = `${environment.brigadeApiHost}/v1/builds/?project_id=${projectId}`;
    }
    return this.http
      .get(buildsUrl, httpOptions);
  }
}
