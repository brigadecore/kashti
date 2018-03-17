import { Build } from '../../models/Build';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BuildService } from './BuildService';

export class MockBuildService implements BuildService {
    getBuilds(projectId: string): Observable<Build[]> {
        return Observable.of([]);
    }
}
