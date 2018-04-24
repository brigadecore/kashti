import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BRIGADE_API_HOST } from '../../app.config';
import { JobService } from './job.service';
import { Job } from '../../models/Job';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiJobService implements JobService {
  constructor(private http: HttpClient) {}

  getJobs(buildId): Observable<Job[]> {
    const jobsUrl = `${BRIGADE_API_HOST}/v1/build/${buildId}/jobs`;

    return this.http
      .get<Job[]>(jobsUrl, httpOptions);
  }

  getJob(jobId): Observable<Job> {
    const jobUrl = `${BRIGADE_API_HOST}/v1/job/${jobId}`;

    return this.http
      .get<Job>(jobUrl, httpOptions);
  }
}
