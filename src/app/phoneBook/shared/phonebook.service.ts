import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from '../shared/person.model';
import { PERSONS } from '../../mock-persons';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PhonebookService {

  private contactsUrl = 'api/persons';  // URL to web api

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.contactsUrl)
      .pipe(
        tap(persons => console.log(`fetchAll`)),
        catchError(this.handleError('fetchAll', []))
      );
  }

  

  /** GET hero by id. Will 404 if id not found */
  view(id: number): Observable<Person> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => console.log(`fetched contact id=${id}`)),
      catchError(this.handleError<Person>(`view id=${id}`))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
