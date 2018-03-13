import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Build } from './models/project';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BuildService {
  constructor(private http: HttpClient) {}

  getBuild(buildId) {
    const buildsUrl = `api/builds/${buildId}`;
    return this.http
      .get(buildsUrl, httpOptions);
  }
}
