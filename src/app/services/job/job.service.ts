import { Observable } from 'rxjs/Observable';
import { Job } from '../../models/job';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class JobService {
    abstract getJobs(buildId: string): Observable<Job[]>;
    abstract getJob(jobId: string): Observable<Job>;
}
