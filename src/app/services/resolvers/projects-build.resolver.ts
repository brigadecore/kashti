import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProjectService } from '../project/project.service';
import { ProjectsBuild } from '../../models/projects-build';

@Injectable()
export class ProjectsBuildResolver implements Resolve<ProjectsBuild[]> {

  constructor(private projectService: ProjectService) {}

  resolve() {
    return this.projectService.getProjectBuilds();
  }
}
