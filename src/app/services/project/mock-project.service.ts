import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ProjectBuild } from '../../models/ProjectBuild';
import { Project } from '../../models/Project';

import { ProjectsBuilds } from '../../mock/projects-builds';
import { Projects } from '../../mock/projects';
import { filter } from 'rxjs/operators';

@Injectable()
export class MockProjectService implements ProjectService {
    getProjectBuilds(): Observable<ProjectBuild[]> {
        return Observable.of(ProjectsBuilds);
    }

    getProject(projectId: string): Observable<Project> {
      const filteredList = Projects.filter((project: Project) => project.id === projectId);
      return Observable.of(filteredList[0]);
    }
}
