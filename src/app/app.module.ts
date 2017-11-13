import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phoneBook/phone-book/phone-book.component';
import { PhoneBookViewComponent } from './phoneBook/phone-book-view/phone-book-view.component';
import { PhonebookService } from './phoneBook/shared/phonebook.service';
import { PhoneBookRoutingModule } from './phoneBook/shared/phonebook.routes.module';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    PhoneBookViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    PhoneBookRoutingModule
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
