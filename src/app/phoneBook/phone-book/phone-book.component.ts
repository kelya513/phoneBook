import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PERSONS } from '../../mock-persons';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.sass']
})
export class PhoneBookComponent implements OnInit {

  persons: Person[] = PERSONS;

  constructor() { }

  ngOnInit() {
  }

}
