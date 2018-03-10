import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MomentModule } from 'angular2-moment';

import { Build, Project } from '../models/project';
import { BuildService } from '../build.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  builds: Build[];
  project;

  constructor(
    private buildService: BuildService,
    private projectService: ProjectService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.getProject(projectId);
    this.getBuilds(projectId);
  }

  getBuilds(projectId): void {
    this.buildService.getBuilds(projectId)
      .subscribe(returnedBuilds => {
        this.builds = returnedBuilds;
      });
  }

  getProject(projectId): void {
    this.projectService.getProject(projectId)
      .subscribe(returnedProject => this.project = returnedProject);
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
