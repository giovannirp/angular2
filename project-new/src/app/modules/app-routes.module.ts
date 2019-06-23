import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { AboutComponent } from '../page/about/about.component';
import { ContactComponent } from '../page/contact/contact.component';
import { CardDetailComponent } from '../shared/components/card-detail/card-detail.component';
import { FaqComponent } from '../page/faq/faq.component';
import { ComoUsarComponent } from '../page/faq/como-usar/como-usar.component';
import { MaisDuvidasComponent } from '../page/faq/mais-duvidas/mais-duvidas.component';
import { ListContactComponent } from '../page/list-contact/list-contact.component';
import { ListEmailComponent } from '../page/list-email/list-email.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: CardDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'listContact', component: ListContactComponent },
  { path: 'listEmail', component: ListEmailComponent },
  {
    path: 'faq', component: FaqComponent,
    children: [
      {path: '', redirectTo: 'comoUsar', pathMatch: 'full'},
      { path: 'comoUsar', component: ComoUsarComponent },
      { path: 'maisDuvidas', component: MaisDuvidasComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
