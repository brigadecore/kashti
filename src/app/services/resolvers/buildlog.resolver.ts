import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { BuildLog } from '../../models/build-log';
import { BuildService } from '../build/build.service';

@Injectable()
export class BuildLogResolver implements Resolve<BuildLog> {

  constructor(private buildService: BuildService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.buildService.getBuildLog(route.paramMap.get('id'));
  }
}
