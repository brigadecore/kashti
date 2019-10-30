import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { startWith, switchMap, take } from 'rxjs/operators';
import { Build } from '../models/build';
import { Project } from '../models/project';
import { BuildService } from '../services/build/build.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  project: Project;
  builds: Build[];
  location: Location;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, location: Location, private buildService: BuildService) {
    this.location = location;
  }

  backClicked() {
    this.location.back();
  }

  ngOnDestroy(): void {
    // stop updating when this component is destroyed
    this.unsubscribe();
  }

  ngOnInit() {
    this.project = this.route.snapshot.data['project'];
    this.builds = this.route.snapshot.data['builds'];

    if (environment.production) {
      this.updateBuilds();
    }
  }

  private updateBuilds() {
    this.subscriptions.push(interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => {
          return this.buildService.getBuilds(this.project.id);
        })
      )
      // stop refreshing the builds after 10 minutes
      .pipe(take(120))
      .subscribe(res => (this.builds = res)));
  }

  private unsubscribe(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(sub => {
        sub.unsubscribe();
      });
    }
  }
}
