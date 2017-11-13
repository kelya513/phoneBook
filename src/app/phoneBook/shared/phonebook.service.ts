import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Person } from '../shared/person.model';
import { PERSONS } from '../../mock-persons';

@Injectable()
export class PhonebookService {

  constructor() { }

  fetchAll(): Observable<Person[]> {
    return of(PERSONS);
  }

  view(id: number): Observable<Person> {
    return of(PERSONS.find(item => item.id === id));
  }

}
