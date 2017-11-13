import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { PhoneBookRoutingModule } from './phoneBook/shared/phonebook.routes.module';

import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phoneBook/phone-book/phone-book.component';
import { PhoneBookViewComponent } from './phoneBook/phone-book-view/phone-book-view.component';
import { PhonebookService } from './phoneBook/shared/phonebook.service';

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
    PhoneBookRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
