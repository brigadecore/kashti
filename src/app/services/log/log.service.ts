import { Observable } from 'rxjs/Observable';
import { Job } from '../../models/job';
import { Log } from '../../models/log';

export abstract class LogService {
  abstract getLog(jobId: string): Observable<Log>;
}
