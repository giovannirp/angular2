import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicasComponent } from './musicas/musicas.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'musicas', component: MusicasComponent},
    {path:'depoimentos', component: DepoimentosComponent},
];