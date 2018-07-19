import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-status-badge',
  templateUrl: './build-status-badge.component.html',
  styleUrls: ['./build-status-badge.component.scss']
})
export class BuildStatusBadgeComponent implements OnInit {
  @Input() status: string;

  constructor() {
    this.status = status;
  }

  ngOnInit() { }

  running(status) {
    if (status === 'Pending' ||
      status === 'Running') {
      return true;
    }
  }

  calculateIconClass(status) {
    switch (status) {
      case 'Succeeded':
        return 'icon ion-md-checkmark-circle';
      case 'Failed':
        return 'icon ion-md-close-circle';
      case 'Pending':
        return 'spinner';
      case 'Running':
        return 'spinner';
      default:
        return 'icon ion-md-radio-button-off unknown';
    }
  }
}
