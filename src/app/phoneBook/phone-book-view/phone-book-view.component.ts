import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../shared/person.model';
import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'app-phone-book-view',
  templateUrl: './phone-book-view.component.html',
  styleUrls: ['./phone-book-view.component.sass']
})
export class PhoneBookViewComponent implements OnInit {

  @Input() person: Person;

  constructor(
    private route: ActivatedRoute,
    private phonebookService: PhonebookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getContact();
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.phonebookService.view(id)
      .subscribe(item => this.person = item);
  }

  goBack(): void {
    this.location.back();
  }

}
