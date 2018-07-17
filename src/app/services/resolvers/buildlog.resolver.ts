import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { BuildService } from '../build/build.service';
import { Build } from '../../models/Build';
import { BuildLog } from '../../models/BuildLog';

@Injectable()
export class BuildLogResolver implements Resolve<BuildLog> {

  constructor(private buildService: BuildService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.buildService.getBuild(route.paramMap.get('id'));
  }
}
