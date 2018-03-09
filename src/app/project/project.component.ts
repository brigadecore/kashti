import { Component, OnInit } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { ProjectBuild } from '../models/project';
import { ProjectBuildService } from '../project-build.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  projectBuilds: ProjectBuild[];

  constructor(private projectBuildService: ProjectBuildService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectBuildService.getProjectBuilds()
      .subscribe(projectBuilds => this.projectBuilds = projectBuilds);
  }
}
