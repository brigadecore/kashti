import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Job } from '../../models/job';
import { JobService } from '../job/job.service';

@Injectable()
export class JobsResolver implements Resolve<Job[]> {

  constructor(private jobService: JobService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.jobService.getJobs(route.paramMap.get('id'));
  }
}

