import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ProjectService } from '../project/project.service';
import { Project } from '../../models/project';

@Injectable()
export class ProjectResolver implements Resolve<Project> {

  constructor(private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.projectService.getProject(route.paramMap.get('id'))
      .catch((e: any) => Observable.throw(console.log(e)));
  }
}
