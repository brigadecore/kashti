import { Observable } from 'rxjs/Observable';
import { Build } from '../../models/Build';
import { Job } from '../../models/Job';

export abstract class BuildService {
    abstract getBuilds(projectId: string): Observable<Build[]>;
    abstract getBuild(buildId: string): Observable<Build>;
}
