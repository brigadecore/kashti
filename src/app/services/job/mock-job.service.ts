import { Job } from '../../models/Job';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { JobService } from './job.service';
import { Jobs } from '../../mock/jobs';
import { filter } from 'rxjs/operators';

export class MockJobService implements JobService {
  getJobs(buildId: string): Observable<Job[]> {
    const filteredList = Jobs.filter(
      (job: Job) => job.build_id === buildId
    );
    return Observable.of(filteredList);
  }

  getJob(jobId: string): Observable<Job> {
    const filteredList =
    Jobs.filter((job: Job) => job.id === jobId);
  return Observable.of(filteredList[0]).delay(500);
  }
}
