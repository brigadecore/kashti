import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { BuildService } from '../build/build.service';
import { Build } from '../../models/build';
import { BuildLog } from '../../models/build-log';

@Injectable()
export class BuildResolver implements Resolve<Build> {

  constructor(private buildService: BuildService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.buildService.getBuild(route.paramMap.get('id'));
  }
}
