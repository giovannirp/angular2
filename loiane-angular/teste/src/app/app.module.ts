import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { TesteeeComponent } from './testeee/testeee.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    TesteeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
