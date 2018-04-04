import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Job } from '../models/Job';
import { Build } from '../models/Build';
import { Revision } from '../models/Revision';

import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  build: Build;
  jobs: Job[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.job = this.route.snapshot.data['job'];
  }

}
