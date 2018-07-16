import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BRIGADE_API_HOST } from '../../app.config';
import { BuildService } from './build.service';
import { Build } from '../../models/Build';
import { BuildLog } from '../../models/BuildLog';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiBuildService implements BuildService {
  constructor(private http: HttpClient) {}

  getBuilds(projectId): Observable<Build[]> {
    const buildsUrl = `${BRIGADE_API_HOST}/v1/project/${projectId}/builds`;

    return this.http
      .get<Build[]>(buildsUrl, httpOptions);
  }

  getBuild(buildId): Observable<Build> {
    const buildUrl = `${BRIGADE_API_HOST}/v1/build/${buildId}`;

    return this.http
      .get<Build>(buildUrl, httpOptions);
  }

  getBuildLog(buildId): Observable<BuildLog> {
    const buildlogUrl = `${BRIGADE_API_HOST}/v1/build/${buildId}/logs?stream=true`;
    const options = {responseType: 'text' as 'json'};

    return this.http
      .get<BuildLog>(buildlogUrl, options);
  }
}
