import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Build } from '../../models/build';
import { BuildService } from '../build/build.service';

@Injectable()
export class BuildsResolver implements Resolve<Build[]> {

  constructor(private buildService: BuildService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.buildService.getBuilds(route.paramMap.get('id'));
  }
}
