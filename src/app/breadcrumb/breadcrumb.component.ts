import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Project } from '../models/Project';
import { Build } from '../models/Build';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  project: Project;
  build: Build;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.project = this.route.snapshot.data['project'];
    this.build = this.route.snapshot.data['build'];
  }

}
