import { Observable } from 'rxjs/Observable';
import { ProjectsBuild } from '../../models/projects-build';
import { Project } from '../../models/project';

export abstract class ProjectService {
    abstract getProjectBuilds(): Observable<ProjectsBuild[]>;
    abstract getProject(projectId: string): Observable<Project>;
}
