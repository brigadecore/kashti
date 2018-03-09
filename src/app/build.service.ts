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
  // private buildsUrl = 'api/project/:project_id/builds'; // URL to web api

  constructor(private http: HttpClient) {}

  getBuilds(projectId): Observable<Build[]> {
    return this.http
      // .get<Build[]>(`api/builds/${projectId}`, httpOptions)
      .get<Build[]>(`api/builds`, httpOptions)
      .pipe(
        tap(projects => console.log(`fetched project buildss`)),
        catchError(this.handleError('getProjects', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
