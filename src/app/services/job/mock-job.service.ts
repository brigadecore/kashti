import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Jobs } from '../../mock/jobs';
import { Job } from '../../models/job';
import { JobService } from './job.service';

export class MockJobService implements JobService {
  getJobs(buildId: string): Observable<Job[]> {
    return Observable.of(Jobs);
  }

  getJob(jobId: string): Observable<Job> {
    const filteredList =
      Jobs.filter((job: Job) => job.id === jobId);
    return Observable.of(filteredList[0]).delay(500);
  }
}
