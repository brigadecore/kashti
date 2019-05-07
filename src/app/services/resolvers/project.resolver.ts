import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../models/project';
import { ProjectService } from '../project/project.service';
import { throwError } from 'rxjs';

@Injectable()
export class ProjectResolver implements Resolve<Project> {
  constructor(private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.projectService
      .getProject(route.paramMap.get('id'))
      .catch((e: any) => throwError(console.log(e)));
  }
}
