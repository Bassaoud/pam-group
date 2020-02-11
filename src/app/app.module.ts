import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeCollabosComponent } from './liste-collabos/liste-collabos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCollabosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
