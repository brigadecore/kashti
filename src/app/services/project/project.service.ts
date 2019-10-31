import { Observable } from 'rxjs/Observable';
import { Project } from '../../models/project';
import { ProjectsBuild } from '../../models/projects-build';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class ProjectService {
    abstract getProjectBuilds(): Observable<ProjectsBuild[]>;
    abstract getProject(projectId: string): Observable<Project>;
}
