import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BRIGADE_API_HOST } from '../../app.config';
import { Log } from '../../models/log';
import { LogService } from './log.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ApiLogService implements LogService {
  constructor(private http: HttpClient) { }

  getLog(jobId): Observable<Log> {
    let log: Log;
    const logUrl = `${BRIGADE_API_HOST}/v1/job/${jobId}/logs?stream=true`;
    const options = { responseType: 'text' as 'json' };

    this.http.get<string>(logUrl, options)
      .map((res: string) => {
        log = { message: res };
      });
    return Observable.of(log);
  }
}
