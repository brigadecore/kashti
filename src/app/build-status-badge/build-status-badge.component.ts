import { Component, OnInit, Input } from '@angular/core';

import { Build } from '../models/Build';

@Component({
  selector: 'app-build-status-badge',
  templateUrl: './build-status-badge.component.html',
  styleUrls: ['./build-status-badge.component.scss']
})
export class BuildStatusBadgeComponent implements OnInit {
  @Input() build: Build;

  constructor() { }

  ngOnInit() {
  }

}
