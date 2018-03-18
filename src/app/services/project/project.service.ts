import { Observable } from 'rxjs/Observable';
import { ProjectsBuild } from '../../models/ProjectsBuild';
import { Project } from '../../models/Project';

export abstract class ProjectService {
    abstract getProjectBuilds(): Observable<ProjectsBuild[]>;
    abstract getProject(projectId: string): Observable<Project>;
}
