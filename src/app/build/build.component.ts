import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Build } from '../models/build';
import { BuildLog } from '../models/build-log';
import { BuildWorker } from '../models/build-worker';
import { Job } from '../models/job';
import { Revision } from '../models/revision';

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
  location: Location;

  constructor(private route: ActivatedRoute, location: Location) { this.location = location; }

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.build = this.route.snapshot.data['build'];
    this.buildlogs = this.route.snapshot.data['buildlog'] as BuildLog;
    this.revision = this.build.revision;
    this.worker = this.build.worker;
    this.jobs = this.route.snapshot.data['jobs'];
  }
}
