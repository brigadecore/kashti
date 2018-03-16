import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Jobs } from './models/project';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class JobService {
  constructor(private http: HttpClient) {}

  getBuild(jobId) {
    const jobsUrl = `api/jobs/${jobId}`;
    return this.http
      .get(jobssUrl, httpOptions);
  }
}
