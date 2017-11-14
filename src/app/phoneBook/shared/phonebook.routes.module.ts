import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneBookComponent }   from './../phone-book/phone-book.component';
import { PhoneBookViewComponent} from './../phone-book-view/phone-book-view.component';
import { PhoneBookEditComponent} from './../phone-book-edit/phone-book-edit.component';
import {PhoneBookCreateComponent } from  './../phone-book-create/phone-book-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/phonebook', pathMatch: 'full' },
  { path: 'phonebook', component: PhoneBookComponent },
  { path: 'phonebook/view/:id', component: PhoneBookViewComponent },
  { path: 'phonebook/create', component: PhoneBookCreateComponent },
  { path: 'phonebook/edit/:id', component: PhoneBookEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class PhoneBookRoutingModule { }
