import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicasComponent } from './musicas/musicas.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'musicas', component: MusicasComponent},
    {path: 'about', component: AboutComponent}
];