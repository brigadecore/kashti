import { Observable } from 'rxjs/Observable';
import { Project } from '../../models/project';
import { ProjectsBuild } from '../../models/projects-build';

export abstract class ProjectService {
    abstract getProjectBuilds(): Observable<ProjectsBuild[]>;
    abstract getProject(projectId: string): Observable<Project>;
}
