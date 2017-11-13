import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';

import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.sass']
})
export class PhoneBookComponent implements OnInit {

  persons: Person[];

  selectedPerson: Person;

  constructor(private phoneBookService: PhonebookService) { }

  ngOnInit() {
    this.getContacts();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  getContacts(): void {
    this.phoneBookService.fetchAll()
      .subscribe(persons => this.persons = persons);
  }

}
