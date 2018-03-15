import { Observable } from 'rxjs/Observable';
import {Build} from '../../models/project'

export abstract class BuildService {
    abstract getBuilds(projectId: string): Observable<Build[]>
}