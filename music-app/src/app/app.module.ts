import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MusicasComponent } from './musicas/musicas.component';
import { MusicaComponent } from './musicas/musica/musica.component';
import { MusicasService } from './musicas/musicas.service';
import { DepoimentoService } from './depoimentos/depoimento.service';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { DepoimentoComponent } from './depoimentos/depoimento/depoimento.component';
import { MusicaDetailComponent } from './musica-detail/musica-detail.component';
import { MenuComponent } from './musica-detail/menu/menu.component';
import { ShoppingCartComponent } from './musica-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './musica-detail/menu-item/menu-item.component';
import { FaqComponent } from './faq/faq.component';
import { ReviewsComponent } from './musica-detail/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    MusicasComponent,
    MusicaComponent,
    DepoimentosComponent,
    DepoimentoComponent,
    MusicaDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    FaqComponent,
    ReviewsComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [MusicasService, DepoimentoService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
