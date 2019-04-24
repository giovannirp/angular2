import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicasComponent } from './musicas/musicas.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { MusicaDetailComponent } from './musica-detail/musica-detail.component';
import { FaqComponent } from './faq/faq.component';
import { MenuComponent } from './musica-detail/menu/menu.component';
import { ReviewsComponent } from './musica-detail/reviews/reviews.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'musicas', component: MusicasComponent},
    {path:'musicas/:id', component: MusicaDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]},
    {path:'depoimentos', component: DepoimentosComponent},
    {path:'faq', component: FaqComponent}
];
