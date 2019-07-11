import { LivrosService } from './services/livros.service';
import { CardsService } from './services/cards.service';
import { AppRoutesModule } from './modules/app-routes/app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './shared/components/header/header.component';
import { CarrocelComponent } from './shared/components/carrocel/carrocel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { CardDetailComponent } from './shared/components/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrocelComponent,
    FooterComponent,
    HomeComponent,
    LivrosComponent,
    CardsComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    AppRoutesModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [CardsService, LivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
