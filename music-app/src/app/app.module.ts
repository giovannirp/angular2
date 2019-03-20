import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { DepoimentoComponent } from './depoimentos/depoimento/depoimento.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    MusicasComponent,
    MusicaComponent,
    DepoimentosComponent,
    DepoimentoComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MusicasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
