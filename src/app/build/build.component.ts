import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Build } from '../models/build';
import { BuildLog } from '../models/build-log';
import { BuildWorker } from '../models/build-worker';
import { Job, JobStatus } from '../models/job';
import { Revision } from '../models/revision';
import { Subscription, interval } from 'rxjs';
import { BuildService } from '../services/build/build.service';
import { JobService } from '../services/job/job.service';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit, OnDestroy {
  build: Build;
  buildlogs: BuildLog;
  revision: Revision;
  worker: BuildWorker;
  jobs: Job[];
  location: Location;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    location: Location,
    private buildService: BuildService,
    private jobService: JobService
  ) {
    this.location = location;
  }

  backClicked() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  ngOnInit() {
    this.build = this.route.snapshot.data['build'];
    this.buildlogs = this.route.snapshot.data['buildlog'] as BuildLog;
    this.revision = this.build.revision;
    this.worker = this.build.worker;
    this.jobs = this.route.snapshot.data['jobs'];

    if (this.shouldUpdate()) {
      this.updateBuild();
    }
  }

  private updateBuild() {

    this.subscriptions.push(interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => {
          // keep updating until the build is no longer pending or running
          if (!this.shouldUpdate()) {
            this.unsubscribe();
          }
          return this.buildService.getBuildLog(this.build.id);
        })
      )
      .subscribe(res => (this.buildlogs = res)));

    this.subscriptions.push(interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => {
          // keep updating until the build is no longer pending or running
          if (!this.shouldUpdate()) {
            this.unsubscribe();
          }
          return this.buildService.getBuild(this.build.id);
        })
      )
      .subscribe(res => (this.build = res)));

    this.subscriptions.push(interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => {
          // keep updating until the build is no longer pending or running
          if (!this.shouldUpdate()) {
            this.unsubscribe();
          }
          return this.jobService.getJobs(this.build.id);
        })
      )
      .subscribe(res => (this.jobs = res)));
  }

  private shouldUpdate(): boolean {
    return this.build.worker.status === JobStatus.Pending || this.build.worker.status === JobStatus.Running;
  }

  private unsubscribe(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(sub => {
        sub.unsubscribe();
      });
    }
  }
}
