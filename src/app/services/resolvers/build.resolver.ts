import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Build } from '../../models/build';
import { BuildService } from '../build/build.service';

@Injectable()
export class BuildResolver implements Resolve<Build> {

  constructor(private buildService: BuildService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.buildService.getBuild(route.paramMap.get('id'));
  }
}
