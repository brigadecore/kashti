import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProjectService } from './project/project.service';
import { Project } from '../models/Project';

@Injectable()
export class ProjectResolver implements Resolve<Project> {

  constructor(private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.projectService.getProject(route.paramMap.get('id'));
  }
}
