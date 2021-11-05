import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewObservableComponent } from './new-observable/new-observable.component';
import { OperatorsListComponent } from './operators-list/operators-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    OperatorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
