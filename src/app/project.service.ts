import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProjectBuild, Project } from './models/project';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class ProjectService {
  projectBuildsUrl = 'api/projectBuilds';

  constructor(private http: HttpClient) {}

  getProjectBuilds(): Observable<ProjectBuild[]> {
    return this.http
      .get<ProjectBuild[]>(this.projectBuildsUrl, httpOptions)
      .pipe(
        tap(projects => console.log(`fetched project buildss`)),
        catchError(this.handleError('getProjects', []))
      );
  }

  getProject(projectId) {
    const projectUrl = `api/projects/${projectId}`;
    return this.http.get(projectUrl, httpOptions)
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
