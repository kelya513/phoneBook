import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../shared/person.model';
import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'app-phone-book-create',
  templateUrl: './phone-book-create.component.html',
  styleUrls: ['./phone-book-create.component.sass']
})
export class PhoneBookCreateComponent implements OnInit {

  item: Person = new Person( );
  persons: Person[];

  constructor(
    private route: ActivatedRoute,
    private phonebookService: PhonebookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    console.log(this.item);

    this.item.createdAt = (new Date().toLocaleString());

    this.phonebookService.create(this.item)
      .subscribe(item => {
        this.persons.push(item);
      });

    this.goBack();
  }

  getContacts(): void {
    this.phonebookService.fetchAll()
      .subscribe(persons => this.persons = persons);
  }


}
