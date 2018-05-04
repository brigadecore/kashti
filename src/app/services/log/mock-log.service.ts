import { Job } from '../../models/Job';
import { Log } from '../../models/Log';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { JobService } from './job.service';
import { LogService } from './log.service';
import { Jobs } from '../../mock/jobs';
import { Logs } from '../../mock/logs';
import { filter } from 'rxjs/operators';

export class MockJobService implements LogService {

  getLog(logId: string): Observable<Log> {
    const filteredList =
    Logs.filter((log: Log) => job.id === jobId);
  return Observable.of(filteredList[0]).delay(500);
  }
}
