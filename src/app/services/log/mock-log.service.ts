import { Job } from '../../models/job';
import { Log } from '../../models/log';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { JobService } from '../job/job.service';
import { LogService } from './log.service';
import { Jobs } from '../../mock/jobs';
import { LogData } from '../../mock/logs';
import { filter } from 'rxjs/operators';

export class MockLogService implements LogService {

  getLog(jobId: string): Observable<Log> {
    return Observable.of(LogData);
  }
}
