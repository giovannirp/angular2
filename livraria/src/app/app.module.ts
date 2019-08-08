import { FaqService } from './services/faq.service';
import { LivrosService } from './services/livros.service';
import { CardsService } from './services/cards.service';
import { AppRoutesModule } from './modules/app-routes/app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { LivrosDetalhesComponent } from './pages/livros-detalhes/livros-detalhes.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ValidationDirective } from './shared/directiva/validation.directive';
import { ErrorComponentComponent } from './shared/components/error-component/error-component.component';
import { AlerarLivrosComponent  } from './pages/alerar-livros/alerar-livros.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrocelComponent,
    FooterComponent,
    HomeComponent,
    LivrosComponent,
    CardsComponent,
    CardDetailComponent,
    LivrosDetalhesComponent,
    ReservasComponent,
    FaqComponent,
    ValidationDirective,
    ErrorComponentComponent,
    AlerarLivrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    AppRoutesModule,
    Ng2SearchPipeModule
    ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CardsService, LivrosService, FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
