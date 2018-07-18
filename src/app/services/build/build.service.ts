import { Observable } from 'rxjs/Observable';
import { Build } from '../../models/Build';
import { BuildLog } from '../../models/BuildLog';
import { Job } from '../../models/Job';

export abstract class BuildService {
    abstract getBuilds(projectId: string): Observable<Build[]>;
    abstract getBuild(buildId: string): Observable<Build>;
    abstract getBuildLog(buildId: string): Observable<BuildLog>;
}
