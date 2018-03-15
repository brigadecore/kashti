import { Observable } from "rxjs/Observable";
import { ProjectBuild, Project } from "../../models/project";

export interface ProjectService {
    getProjectBuilds(): Observable<ProjectBuild[]>;
    getProject(projectId: string): Observable<Project>;
}