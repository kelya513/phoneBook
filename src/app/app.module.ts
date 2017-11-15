import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { PhoneBookRoutingModule } from './phoneBook/shared/phonebook.routes.module';
import { PhonebookModule } from './phoneBook/shared/phonebook.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    PhonebookModule,
    PhoneBookRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
