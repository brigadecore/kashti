import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Log } from '../models/Log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  log: Log;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.log = this.route.snapshot.data['log'];
  }
}
