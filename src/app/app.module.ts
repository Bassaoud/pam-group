import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeCollabosComponent } from './liste-collabos/liste-collabos.component';
import { CarouselDeMomoComponent } from './carousel-de-momo/carousel-de-momo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCollabosComponent

    CarouselDeMomoComponent
  ],
  
  imports: [
    BrowserModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
