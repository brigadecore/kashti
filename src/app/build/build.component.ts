import { Component, OnInit, HostBinding } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Build } from '../models/Build';
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
  revision: Revision;
  worker: BuildWorker;
  jobs: Job[];
  location: Location;

  constructor(private route: ActivatedRoute, location: Location) { this.location = location; }

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.build = this.route.snapshot.data['build'];
    this.revision = this.build.revision;
    this.worker = this.build.worker;
    this.jobs = this.route.snapshot.data['jobs'];
  }
}
