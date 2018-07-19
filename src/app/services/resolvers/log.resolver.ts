import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Log } from '../../models/log';
import { LogService } from '../log/log.service';

@Injectable()
export class LogResolver implements Resolve<Log> {

  constructor(private logService: LogService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.logService.getLog(route.paramMap.get('id'));
  }
}
