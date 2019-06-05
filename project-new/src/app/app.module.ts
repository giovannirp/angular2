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
import { AboutComponent } from './page/about/about.component';
import { CardComponent } from './shared/components/cards/card/card.component';
import { CardService } from './shared/components/cards/card.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutSubComponent } from './page/about/about-sub/about-sub.component';
import { AboutService } from './page/about/about.service';
import { ContactComponent } from './page/contact/contact.component';
import { CardDetailComponent } from './shared/components/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardsComponent,
    FooterComponent,
    SidebarComponent,
    CarrocelComponent,
    AboutComponent,
    CardComponent,
    AboutSubComponent,
    ContactComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CardService, AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
