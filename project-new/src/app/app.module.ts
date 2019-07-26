import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './modules/app-routes.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CarrocelComponent } from './shared/components/carrocel/carrocel.component';
import { AboutComponent } from './page/about/about.component';
import { CardComponent } from './shared/components/cards/card/card.component';
import { CardService } from './services/card.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutSubComponent } from './page/about/about-sub/about-sub.component';
import { AboutService } from './services/about.service';
import { ContactComponent } from './page/contact/contact.component';
import { CardDetailComponent } from './shared/components/card-detail/card-detail.component';
import { DetalheProdutoComponent } from './shared/components/card-detail/detalhe-produto/detalhe-produto.component';
import { InformacaoProdutoComponent } from './shared/components/card-detail/informacao-produto/informacao-produto.component';
import { DepoimentosComponent } from './shared/components/card-detail/depoimentos/depoimentos.component';
import { FaqComponent } from './page/faq/faq.component';
import { FaqService } from './services/faq.service';
import { ComoUsarComponent } from './page/faq/como-usar/como-usar.component';
import { MaisDuvidasComponent } from './page/faq/mais-duvidas/mais-duvidas.component';
import { ContactService } from './services/contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListContactComponent } from './page/list-contact/list-contact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NewsService } from './services/news.service';
import { ListEmailComponent } from './page/list-email/list-email.component';
import { ValidationDirective } from './shared/directiva/validation.directive';
import { ErrorComponentComponent } from './shared/components/error-component/error-component.component';



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
    CardDetailComponent,
    DetalheProdutoComponent,
    InformacaoProdutoComponent,
    DepoimentosComponent,
    FaqComponent,
    ComoUsarComponent,
    MaisDuvidasComponent,
    ListContactComponent,
    ListEmailComponent,
    ValidationDirective,
    ErrorComponentComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CardService, AboutService, FaqService, ContactService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
