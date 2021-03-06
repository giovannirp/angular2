import { FaqComponent } from './../../pages/faq/faq.component';
import { ReservasComponent } from './../../pages/reservas/reservas.component';
import { LivrosDetailsComponent } from './../../pages/livros/livros-details/livros-details.component';
import { LivrosComponent } from './../../pages/livros/livros.component';
import { AlerarLivrosComponent  } from './../../pages/alerar-livros/alerar-livros.component';
import { HomeComponent } from './../../pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailComponent } from 'src/app/shared/components/card-detail/card-detail.component';
import { LivrosDetalhesComponent } from 'src/app/pages/livros-detalhes/livros-detalhes.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {path: 'home/:id', component: CardDetailComponent },
  {path: 'livros', component: LivrosComponent },
  {path: 'livros/:id', component: LivrosDetalhesComponent },
  {path: 'reservas', component: ReservasComponent},
  {path: 'reservas/:id', component: AlerarLivrosComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component: ContactComponent}
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
