import { Component, OnInit } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { Project } from '../models/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
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
      icon: true,
      'project-unknown': true,
      'ion-android-radio-button-off': true
    };
  }
}
