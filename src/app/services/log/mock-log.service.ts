import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { LogData } from '../../mock/logs';
import { Log } from '../../models/log';
import { LogService } from './log.service';

export class MockLogService implements LogService {

  getLog(jobId: string): Observable<Log> {
    return Observable.of(LogData);
  }
}
