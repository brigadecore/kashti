import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ProjectBuild } from './models/project-build';

@Injectable()
export class ProjectBuildService {
  readonly API_ROOT: 'https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745';

  constructor(private http: HttpClient) {}

  getProjectBuilds(): Observable<ProjectBuild[]> {
    return this.http
      .get<ProjectBuild[]>(`${this.API_ROOT}/v1/projects-build`)
      .pipe(
        tap(projectBuilds =>
          console.log(`fetched project builds: ${projectBuilds}`)
        ),
        catchError(this.handleError('projectBuilds', []))
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
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
