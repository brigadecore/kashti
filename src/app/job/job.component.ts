import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Job } from '../models/Job';
import { Log } from '../models/Log';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['../build/build.component.scss']
})
export class JobComponent implements OnInit {
  job: Job;
  log: Log;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // let buildId = this.route.snapshot.paramMap.get('buildId');
    // this.data = this.service.getJobs(buildId);

    this.job = this.route.snapshot.data['job'];
    this.log = this.route.snapshot.data['log'];
  }
}
