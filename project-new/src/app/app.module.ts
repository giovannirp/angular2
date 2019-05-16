import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './app-routes.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CarrocelComponent } from './shared/components/carrocel/carrocel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardsComponent,
    FooterComponent,
    SidebarComponent,
    CarrocelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
