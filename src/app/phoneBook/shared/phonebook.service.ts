import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Person } from '../shared/person.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PhonebookService {

  private contactsUrl = 'http://589b1131bc99bf120037b98c.mockapi.io/api/v1/phones';

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<any> {
    return this.http.get(this.contactsUrl)
      .pipe(
        tap(this.extractData),
        catchError(this.handleError('fetchAll', []))
      );
  }

  private extractData(res) {
    let body : Person[] = <Person[]>res;
    body.forEach(item => item.createdAtM = isNaN(Number(item.createdAt)) ? '' : item.createdAt);
    console.log(body);
    return body;
  }


  /** GET by id. Will 404 if id not found */
  view(id: number): Observable<Person> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => console.log(`fetched contact id=${id}`)),
      catchError(this.handleError<Person>(`fetched contact id=${id}`))
    );
  }

  /** PUT: update on the server */
  edit(item: Person, id): Observable<any> {
    return this.http.put(this.contactsUrl, item, httpOptions).pipe(
      tap(_ => console.log(`updated contact id=${id}`)),
      catchError(this.handleError<any>('edit contact'))
    );
  }

  /** POST: add a new hero to the server */
  create(item: Person): Observable<Person> {
    return this.http.post<Person>(this.contactsUrl, item, httpOptions).pipe(
      tap((item: Person) => console.log(`added id=${item.id}`)),
      catchError(this.handleError<Person>('create'))
    );
  }

  /** DELETE: delete the from the server */
  delete (id: number): Observable<Person> {
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
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
