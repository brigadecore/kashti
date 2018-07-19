import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { Projects } from '../../mock/projects';
import { ProjectsBuilds } from '../../mock/projects-builds';
import { Project } from '../../models/project';
import { ProjectsBuild } from '../../models/projects-build';
import { ProjectService } from './project.service';

@Injectable()
export class MockProjectService implements ProjectService {
  getProjectBuilds(): Observable<ProjectsBuild[]> {
    return Observable.of(ProjectsBuilds).delay(500);
  }

  getProject(projectId: string): Observable<Project> {
    const filteredList =
      Projects.filter((project: Project) => project.id === projectId);
    return Observable.of(filteredList[0]).delay(500);
  }
}
