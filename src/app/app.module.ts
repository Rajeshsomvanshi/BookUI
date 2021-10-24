import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { EditBookComponent } from './edit-book/edit-book.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    SearchComponent,
    HomeComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
