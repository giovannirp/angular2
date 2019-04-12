import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicasComponent } from './musicas/musicas.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { MusicaDetailComponent } from './musica-detail/musica-detail.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'musicas', component: MusicasComponent},
    {path:'musicas/:id', component: MusicaDetailComponent},
    {path:'depoimentos', component: DepoimentosComponent},
];