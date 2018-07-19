import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProjectsBuild } from '../../models/projects-build';
import { ProjectService } from '../project/project.service';

@Injectable()
export class ProjectsBuildResolver implements Resolve<ProjectsBuild[]> {

  constructor(private projectService: ProjectService) { }

  resolve() {
    return this.projectService.getProjectBuilds();
  }
}
