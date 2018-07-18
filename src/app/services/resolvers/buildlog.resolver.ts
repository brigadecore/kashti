import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { BuildService } from '../build/build.service';
import { Build } from '../../models/build';
import { BuildLog } from '../../models/build-log';

@Injectable()
export class BuildLogResolver implements Resolve<BuildLog> {

  constructor(private buildService: BuildService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.buildService.getBuildLog(route.paramMap.get('id'));
  }
}
