import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(
    private phoneBookService: PhonebookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  goCreate(): void{
    this.router.navigate(['/phonebook/create']);
  }

  getContacts(): void {
    this.phoneBookService.fetchAll()
      .subscribe(persons => this.persons = persons);
  }

  deleteContacts(person: Person): void {
    this.persons = this.persons.filter(item => item !== person);
    this.phoneBookService.delete(person.id).subscribe();
  }

}
