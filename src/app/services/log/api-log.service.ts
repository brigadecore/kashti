import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BRIGADE_API_HOST } from '../../app.config';
import { LogService } from './log.service';
import { Log } from '../../models/Log';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiLogService implements LogService {
  constructor(private http: HttpClient) {}

  getLog(jobId): Observable<Log> {
    const logUrl = `${BRIGADE_API_HOST}/v1/job/${jobId}/logs`;

    return this.http
      .get<Log>(logUrl, httpOptions);
  }
}
