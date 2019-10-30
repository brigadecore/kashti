import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Job, JobStatus } from '../models/job';
import { Log } from '../models/log';
import { interval, Subscription } from 'rxjs';
import { startWith, switchMap, filter, take } from 'rxjs/operators';
import { JobService } from '../services/job/job.service';
import { LogService } from '../services/log/log.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  providers: [Location],
  styleUrls: ['../build/build.component.scss']
})
export class JobComponent implements OnInit, OnDestroy {
  job: Job;
  log: Log;
  location: Location;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    location: Location,
    private jobService: JobService,
    private logService: LogService
  ) {
    this.location = location;
  }

  backClicked() {
    this.location.back();
  }

  ngOnDestroy(): void {
    // stop updating when this component is destroyed
    this.unsubscribe();
  }

  ngOnInit() {
    this.job = this.route.snapshot.data['job'];
    this.log = this.route.snapshot.data['log'];

    if (environment.production && this.shouldUpdate()) {
      this.updateJob();
    }
  }

  private updateJob() {
    this.subscriptions.push(interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => {
          // keep updating until the job is no longer pending or running
          if (!this.shouldUpdate()) {
            this.unsubscribe();
          }
          return this.jobService.getJob(this.job.id);
        })
      )
      .subscribe(res => (this.job = res)));

    this.subscriptions.push(interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => {
          // keep updating until the job is no longer pending or running
          if (!this.shouldUpdate()) {
            this.unsubscribe();
          }
          return this.logService.getLog(this.job.id);
        }))
      .subscribe(res => (this.log = res)));
  }

  private shouldUpdate(): boolean {
    return this.job.status === JobStatus.Pending || this.job.status === JobStatus.Running;
  }

  private unsubscribe(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(sub => {
        sub.unsubscribe();
      });
    }
  }
}
