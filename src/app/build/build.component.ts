import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MomentModule } from 'angular2-moment';

import { Build, Project } from '../models/project';
import { BuildService } from '../build.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})

export class BuildComponent implements OnInit {
  build;

  constructor(
    private buildService: buildService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.getBuild(buildId);
  }

  getBuild(buildId): void {
    this.buildService.getBuild(projectId)
      .subscribe(returnedBuild => {
        this.build = returnedBuild;
      },
      error => console.error(error));
  }
}
