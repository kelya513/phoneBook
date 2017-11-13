import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneBookComponent }   from './../phone-book/phone-book.component';
import { PhoneBookViewComponent} from './../phone-book-view/phone-book-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/phonebook', pathMatch: 'full' },
  { path: 'phonebook', component: PhoneBookComponent },
  { path: 'phonebook/view/:id', component: PhoneBookViewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class PhoneBookRoutingModule { }
