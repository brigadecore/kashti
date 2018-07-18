import { Build } from '../../models/build';
import { Job } from '../../models/job';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BuildService } from '../build/build.service';
import { JobService } from './job.service';
import { Builds } from '../../mock/builds';
import { Jobs } from '../../mock/jobs';
import { filter } from 'rxjs/operators';

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
