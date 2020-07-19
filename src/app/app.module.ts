import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework11Component } from './homework11/homework11.component';
import { Homework12Component } from './homework12/homework12.component';
import { Homework13Component } from './homework13/homework13.component';
import { Homework14Component } from './homework14/homework14.component';
import { SortByNamePipe } from './homework14/sortByName.pipe';
import { SearchPipe } from './homework14/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Homework11Component,
    Homework12Component,
    Homework13Component,
    Homework14Component,
    SortByNamePipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  exports: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
