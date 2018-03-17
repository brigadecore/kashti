import { Injectable } from '@angular/core';
import { ProjectService } from './ProjectService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ProjectBuild } from '../../models/ProjectBuild';
import { Project } from '../../models/Project';

import { ProjectsBuilds } from '../../mock/projects-builds';

@Injectable()
export class MockProjectService implements ProjectService {
    getProjectBuilds(): Observable<ProjectBuild[]> {
        return Observable.of(ProjectsBuilds);
    }
    getProject(projectId: string): Observable<Project> {
        throw new Error('Method not implemented.');
    }
}
