import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MomentModule } from 'angular2-moment';

import { ProjectService } from '../services/project/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  projectsBuilds = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectsBuilds = this.route.snapshot.data['projectsBuilds'];
  }

  showStatus(projectBuild) {
    if (projectBuild.lastBuild === null || projectBuild.lastBuild.worker === undefined) {
      return false;
    }

    return true;
  }

  calculateStatusClasses(lastBuild) {
    if (lastBuild === null || lastBuild.worker === undefined) {
      return this.unknownStateClasses();
    }

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
