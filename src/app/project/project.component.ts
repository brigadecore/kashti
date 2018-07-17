import { Component, OnInit, HostBinding } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Project } from '../models/Project';
import { Build } from '../models/Build';

import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  project: Project;
  builds: Build[];
  location: Location;

  constructor(private route: ActivatedRoute, location: Location) { this.location = location }

  backClicked() {
    this.location.back();
  };

  ngOnInit() {
    this.project = this.route.snapshot.data['project'];
    this.builds = this.route.snapshot.data['builds'];
  }

  CalculateProviderLogoClass(buildProvider) {
    switch (buildProvider) {
      case 'github':
        return 'icon ion-logo-github';
      default:
        return 'icon ion-logo-tux';
    }
  }
}
