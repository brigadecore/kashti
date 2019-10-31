import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastBuild } from '../models/last-build';
import { ProjectsBuild } from '../models/projects-build';
import { JobStatus } from '../models/job';
import { Subscription, interval } from 'rxjs';
import { ProjectService } from '../services/project/project.service';
import { startWith, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  location: Location;
  projectsBuilds: ProjectsBuild[];
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, location: Location, private projectService: ProjectService) { this.location = location; }

  backClicked() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  private unsubscribe(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(sub => {
        sub.unsubscribe();
      });
    }
  }

  private updateProjects() {
    if (!environment.production) {
      return;
    }

    this.subscriptions.push(interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => {
          return this.projectService.getProjectBuilds();
        })
      )
      // stop refreshing the projects after 10 minutes
      .pipe(take(120))
      .subscribe(res => (this.projectsBuilds = res)));
  }

  ngOnInit() {
    this.projectsBuilds = this.route.snapshot.data['projectsBuilds'];

    this.updateProjects();
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
      case JobStatus.Succeeded:
        return this.successStateClasses();
      case JobStatus.Failed:
        return this.failureStateClasses();
      case JobStatus.Running:
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
