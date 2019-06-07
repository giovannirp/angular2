import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { CardDetailComponent } from './shared/components/card-detail/card-detail.component';
import { DetalheProdutoComponent } from './shared/components/card-detail/detalhe-produto/detalhe-produto.component';
import { InformacaoProdutoComponent } from './shared/components/card-detail/informacao-produto/informacao-produto.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: CardDetailComponent,
    children: [
      {path: 'detalheProd', component: DetalheProdutoComponent},
      {path: 'infoProd', component: InformacaoProdutoComponent}
    ]
  },
  {path: 'about', component: AboutComponent},
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
