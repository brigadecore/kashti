import { Injectable } from "@angular/core";
import { ProjectService } from "./ProjectService";
import { Observable } from "rxjs/Observable";
import { ProjectBuild, Project } from "../../models/project";

@Injectable()
export class MockProjectService implements ProjectService {
    getProjectBuilds(): Observable<ProjectBuild[]> {
        throw new Error("Method not implemented.");
    }
    getProject(projectId: string): Observable<Project> {
        throw new Error("Method not implemented.");
    }
}