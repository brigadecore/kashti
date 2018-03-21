import { Component, OnInit, HostBinding } from '@angular/core';

import { Project } from '../models/Project';
import { Build } from '../models/Build';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
