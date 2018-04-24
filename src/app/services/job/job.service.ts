import { Observable } from 'rxjs/Observable';
import { Build } from '../../models/Build';
import { Job } from '../../models/Job';

export abstract class JobService {
    abstract getJobs(buildId: string): Observable<Job[]>;
    abstract getJob(jobId: string): Observable<Job>;
}
