import { Observable } from 'rxjs/Observable';
import { Log } from '../../models/log';

export abstract class LogService {
  abstract getLog(jobId: string): Observable<Log>;
}
