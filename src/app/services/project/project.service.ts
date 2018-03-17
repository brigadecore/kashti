import { Observable } from 'rxjs/Observable';
import { ProjectBuild } from '../../models/ProjectBuild';
import { Project } from '../../models/Project';

export abstract class ProjectService {
    abstract getProjectBuilds(): Observable<ProjectBuild[]>;
    abstract getProject(projectId: string): Observable<Project>;
}
