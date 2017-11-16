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
              tap(this.extractData)
           );
  }

  private extractData(res) {
     let body : Person[] = <Person[]>res;
       body.forEach(item => item.createdAtM = isNaN(Number(item.createdAt)) ? '' : item.createdAt);
      return body;
  }

  /** GET by id. Will 404 if id not found */
  view(id: number): Observable<Person> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Person>(url)
  }

  /** PUT: update on the server */
  edit(item: Person, id): Observable<any> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.put(url, JSON.stringify(item), httpOptions)
  }

  /** POST: add a new hero to the server */
  create(item: Person): Observable<Person> {
    return this.http.post<Person>(this.contactsUrl, item, httpOptions)
  }

  /** DELETE: delete the from the server */
  delete (id: number): Observable<Person> {
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions)
  }


}
