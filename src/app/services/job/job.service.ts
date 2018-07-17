import { Observable } from 'rxjs/Observable';
import { Build } from '../../models/build';
import { Job } from '../../models/job';

export abstract class JobService {
    abstract getJobs(buildId: string): Observable<Job[]>;
    abstract getJob(jobId: string): Observable<Job>;
}
