import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { BuildLogs } from '../../mock/build-logs';
import { Builds } from '../../mock/builds';
import { Build } from '../../models/build';
import { BuildLog } from '../../models/build-log';
import { BuildService } from './build.service';

export class MockBuildService implements BuildService {
  getBuilds(projectId: string): Observable<Build[]> {
    const filteredList = Builds.filter(
      (build: Build) => build.project_id === projectId
    );
    return Observable.of(filteredList);
  }

  getBuild(buildId: string): Observable<Build> {
    const filteredList =
      Builds.filter((build: Build) => build.id === buildId);
    return Observable.of(filteredList[0]).delay(500);
  }

  getBuildLog(buildId: string): Observable<BuildLog> {
    return Observable.of(BuildLogs);
  }
}
