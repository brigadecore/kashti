import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { Build } from '../models/project';
import { BuildService } from '../build.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  builds: Build[];

  constructor(
    private buildService: BuildService,
    private projectService: ProjectService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.getBuilds('abcdef');
  }

  getBuilds(projectId): void {
    this.buildService.getBuilds('abcdef')
      .subscribe(returnedBuilds => {
        this.builds = returnedBuilds;
      });
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
