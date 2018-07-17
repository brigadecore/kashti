import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { JobService } from '../job/job.service';
import { Job } from '../../models/job';

@Injectable()
export class JobResolver implements Resolve<Job> {

  constructor(private jobService: JobService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.jobService.getJob(route.paramMap.get('id'));
  }
}
