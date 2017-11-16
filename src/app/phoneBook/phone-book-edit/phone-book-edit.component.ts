import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Person } from '../shared/person.model';
import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'app-phone-book-edit',
  templateUrl: './phone-book-edit.component.html',
  styleUrls: ['./phone-book-edit.component.sass']
})
export class PhoneBookEditComponent implements OnInit {

  person: Person;
  myForm : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private phonebookService: PhonebookService,
    private location: Location
  ) {
    this.myForm = new FormGroup({

      "firstName": new FormControl("", Validators.required),
      "secondName": new FormControl(""),
      "phone": new FormControl("",Validators.required),
      "address": new FormControl(),
      "createdAt": new FormControl("")
    });

  }

  ngOnInit() {
    this.getContact();
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.phonebookService.view(id)
      .subscribe(item => {
        this.person = item;
        this.myForm.setValue({
          "firstName": this.person.firstName,
          "secondName": this.person.secondName,
          "phone": this.person.phone,
          "address": this.person.address,
          "createdAt": this.person.createdAt
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.phonebookService.edit(this.person, id)
      .subscribe(() => this.goBack());
  }

  submit(): void{
    for (let key in this.person) {
      if (key in this.myForm.value)
        this.person[key] = this.myForm.value[key];
    }
    this.save();
  }

}
