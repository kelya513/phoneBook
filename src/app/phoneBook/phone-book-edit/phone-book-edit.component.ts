import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'app-phone-book-edit',
  templateUrl: './phone-book-edit.component.html',
  styleUrls: ['./phone-book-edit.component.sass']
})
export class PhoneBookEditComponent implements OnInit {

  id: number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private phonebookService: PhonebookService,
    private location: Location
  ) {

  }

  ngOnInit() {  }

}
