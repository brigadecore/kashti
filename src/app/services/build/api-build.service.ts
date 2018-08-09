import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BRIGADE_API_HOST } from '../../app.config';
import { Build } from '../../models/build';
import { BuildLog } from '../../models/build-log';
import { BuildService } from './build.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiBuildService implements BuildService {
  constructor(private http: HttpClient) { }

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
    let buildLog: BuildLog;
    const buildlogUrl = `${BRIGADE_API_HOST}/v1/build/${buildId}/logs?stream=true`;
    const options = { responseType: 'text' as 'json' };

    this.http.get<string>(buildlogUrl, options)
      .map((log: string) => {
        buildLog = { message: log };
      });
    return Observable.of(buildLog);
  }
}
