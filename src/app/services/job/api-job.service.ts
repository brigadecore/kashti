import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BRIGADE_API_HOST } from '../../app.config';
import { Job } from '../../models/job';
import { JobService } from './job.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiJobService implements JobService {
  constructor(private http: HttpClient) { }

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
