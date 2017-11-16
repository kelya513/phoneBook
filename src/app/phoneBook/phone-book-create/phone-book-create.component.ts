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

  default: number = -1;

  constructor(
    private route: ActivatedRoute,
    private phonebookService: PhonebookService,
    private location: Location
  ) { }

  ngOnInit() {}

}
