import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MomentModule } from 'angular2-moment';

import { BuildService } from '../services/build/build.service';
// import { JobService } from '../job.service';
// import { ProjectService } from '../project.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})

export class BuildComponent implements OnInit {
  build;
  revision;
  worker;

  constructor(
    private buildService: BuildService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    const buildId = this.route.snapshot.paramMap.get('id');
    this.getBuild(buildId);
  }

  getBuild(buildId: string) {
    this.buildService.getBuild(buildId)
      .subscribe(data => {
        this.build = data;
        this.revision = this.build.revision;
        this.worker = this.build.worker;
      },
      error => console.error(error));
  }
}
