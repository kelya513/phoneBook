import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Person } from '../shared/person.model';
import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'app-phonebook-form',
  templateUrl: './phonebook-form.component.html',
  styleUrls: ['./phonebook-form.component.sass']
})
export class PhonebookFormComponent implements OnInit {

  @Input() id: number;
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
      "address": new FormControl()
    });

  }

  ngOnInit() {
    if (this.id >-1){
      this.getContact();
    }else {
      this.person = new Person({
      firstName: "",
      secondName: "",
      phone: "",
      address: "",
      createdAt: ""
      }
      );
    }
  }

  getContact(): void {
    this.phonebookService.view(this.id)
      .subscribe(item => {
        this.person = item;
        this.myForm.setValue({
          "firstName": this.person.firstName,
          "secondName": this.person.secondName,
          "phone": this.person.phone,
          "address": this.person.address,
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.phonebookService.edit(this.person, this.id)
      .subscribe(() => this.goBack());
  }

  add(item: Person): void {


    this.phonebookService.create(item)
      .subscribe(item => {
        this.goBack();
      });
  }

  submit(): void{
    for (let key in this.person) {
      if (key in this.myForm.value)
        this.person[key] = this.myForm.value[key];
    }
    if (this.id>-1){
      this.save();
    }else {
      this.person.createdAt = Date.now().toString();
      this.add(this.person);
    }
  }

}
