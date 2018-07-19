import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Log } from '../models/log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  log: Log;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.log = this.route.snapshot.data['log'];
  }
}
