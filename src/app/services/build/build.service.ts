import { Observable } from 'rxjs/Observable';
import { Build } from '../../models/build';
import { BuildLog } from '../../models/build-log';

export abstract class BuildService {
    abstract getBuilds(projectId: string): Observable<Build[]>;
    abstract getBuild(buildId: string): Observable<Build>;
    abstract getBuildLog(buildId: string): Observable<BuildLog>;
}
