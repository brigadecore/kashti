import { Component, OnInit } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { Build } from '../models/project';
import { BuildService } from '../build.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  builds: Build[];

  constructor(private buildService: BuildService) { }

  ngOnInit() {
    this.getBuilds('abcdef');
  }

  getBuilds(projectId): void {
    this.buildService.getBuilds('abcdef')
      .subscribe(returnedBuilds => {
        this.builds = returnedBuilds;
      });
  }
}
