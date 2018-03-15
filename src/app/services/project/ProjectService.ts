import { Observable } from "rxjs/Observable";
import { ProjectBuild, Project } from "../../models/project";

export abstract class ProjectService {
    abstract getProjectBuilds(): Observable<ProjectBuild[]>;
    abstract getProject(projectId: string): Observable<Project>;
}