import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NadvarComponent } from './components/shared/nadvar/nadvar.component';

@NgModule({
  declarations: [
    AppComponent,
    NadvarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
