import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

import { PhoneBookComponent } from './../phone-book/phone-book.component';
import { PhoneBookViewComponent } from './../phone-book-view/phone-book-view.component';
import { PhoneBookCreateComponent } from './../phone-book-create/phone-book-create.component';
import { PhoneBookEditComponent } from './../phone-book-edit/phone-book-edit.component';

import { PhonebookFormComponent } from './../phonebook-form/phonebook-form.component';

import { PhonebookService } from './phonebook.service';
import { PhoneBookRoutingModule } from './phonebook.routes.module';
import { PhonebookPipe } from './phonebook.pipe';

@NgModule({
  imports: [
    CommonModule,
    PhoneBookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PhoneBookComponent,
    PhoneBookViewComponent,
    PhoneBookCreateComponent,
    PhoneBookEditComponent,
    PhonebookPipe,
    PhonebookFormComponent
  ],
  declarations: [
    PhoneBookComponent,
    PhoneBookViewComponent,
    PhoneBookCreateComponent,
    PhoneBookEditComponent,
    PhonebookPipe,
    PhonebookFormComponent
  ],
  providers: [PhonebookService]
})
export class PhonebookModule { }
