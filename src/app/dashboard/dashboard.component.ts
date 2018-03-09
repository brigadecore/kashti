import { Component, OnInit } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { ProjectBuild } from '../models/project';
import { ProjectBuildService } from '../project-build.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  projectBuilds: ProjectBuild[];

  constructor(private projectBuildService: ProjectBuildService) { }

  ngOnInit() {
    this.getProjectBuilds();
  }

  getProjectBuilds(): void {
    this.projectBuildService.getProjectBuilds()
      .subscribe(projectBuilds => this.projectBuilds = projectBuilds);
  }

  calculateStatusClasses(lastBuild) {
    const status = lastBuild.worker.status;

    switch (status) {
      case 'Success':
        return this.successStateClasses();
      case 'Failed':
        return this.failureStateClasses();
      case 'Active':
        return this.activeStateClasses();
      default:
        return this.unknownStateClasses();
    }

  }

  successStateClasses() {
    return {
      'project-success': true,
      'ion-md-checkmark-circle': true
    };
  }

  failureStateClasses() {
    return {
      'project-fail': true,
      'ion-md-close-circle': true
    };
  }

  activeStateClasses() {
    return {
      'project-active': true
    };
  }

  unknownStateClasses() {
    return {
      'icon': true,
      'project-unknown': true,
      'ion-md-radio-button-off': true
    };
  }
}
