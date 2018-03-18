import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MomentModule } from 'angular2-moment';

import { Build } from '../models/Build';
import { Project } from '../models/Project';
import { ProjectService } from '../services/project/project.service';
import { BuildService } from '../services/build/build.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  project;
  builds;

  constructor(
    private projectService: ProjectService,
    private buildService: BuildService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.project = this.route.snapshot.data['project'];
    this.builds = this.route.snapshot.data['builds'];
  }

  calculateProviderLogoClass(buildProvider) {
    switch (buildProvider) {
      case 'github':
        return 'icon ion-logo-github';
      default:
        return 'icon ion-logo-tux';
    }
  }
}
