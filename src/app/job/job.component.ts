import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Job } from '../models/job';
import { Log } from '../models/log';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  styleUrls: ['../build/build.component.scss']
})
export class JobComponent implements OnInit {
  job: Job;
  log: Log;
  location: Location;

  constructor(private route: ActivatedRoute, location: Location) { this.location = location; }

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.job = this.route.snapshot.data['job'];
    this.log = this.route.snapshot.data['log'];
  }
}
