import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastBuild } from '../models/last-build';
import { ProjectsBuild } from '../models/projects-build';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  location: Location;

  projectsBuilds: ProjectsBuild[];

  constructor(private route: ActivatedRoute, location: Location) { this.location = location; }

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.projectsBuilds = this.route.snapshot.data['projectsBuilds'];
  }

  showStatus(projectBuild: ProjectsBuild) {
    if (projectBuild.lastBuild === null || projectBuild.lastBuild.worker === undefined || projectBuild.lastBuild.worker === null) {
      return false;
    }

    return true;
  }

  calculateStatusClasses(lastBuild: LastBuild) {
    if (lastBuild === null || lastBuild.worker === undefined || lastBuild.worker === null) {
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
