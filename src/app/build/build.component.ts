import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Build } from '../models/Build';
import { BuildLog } from '../models/BuildLog';
import { Revision } from '../models/Revision';
import { BuildWorker } from '../models/BuildWorker';
import { Job } from '../models/Job';

import { MomentModule } from 'angular2-moment';
import { LongDateFormatKey } from 'moment';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})

export class BuildComponent implements OnInit {
  build: Build;
  buildlogs: BuildLog;
  revision: Revision;
  worker: BuildWorker;
  jobs: Job[];
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.build = this.route.snapshot.data['build'];
    this.buildlog = this.route.snapshot.data['buildlog'];
    this.revision = this.build.revision;
    this.worker = this.build.worker;
    this.jobs = this.route.snapshot.data['jobs'];
  }
}
