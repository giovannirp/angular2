import { DetailsService } from './services/details.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutesModule} from './modules/app-routes/app-routes.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
