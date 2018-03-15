import { Observable } from 'rxjs/Observable';
import {Build} from '../../models/project'

export interface BuildService {
    getBuilds(projectId: string): Observable<Build[]>
}