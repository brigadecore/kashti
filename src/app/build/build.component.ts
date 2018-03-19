import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
  build;
  revision;
  worker;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.build = this.route.snapshot.data['build'];
    this.revision = this.build.revision;
    this.worker = this.build.worker;
  }
}
