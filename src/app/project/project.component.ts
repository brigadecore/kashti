import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Build } from '../models/build';
import { Project } from '../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  project: Project;
  builds: Build[];
  location: Location;

  constructor(private route: ActivatedRoute, location: Location) { this.location = location; }

  backClicked() {
    this.location.back();
  }

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
