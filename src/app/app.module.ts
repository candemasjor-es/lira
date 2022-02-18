import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { AccesoComponent } from './views/acceso/acceso.component';
import { GravatarModule } from 'ngx-gravatar'
import { CarouselComponent } from './components/carousel/carousel.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EscuelaComponent } from './views/escuela/escuela.component';
import { BandasComponent } from './views/bandas/bandas.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { MainComponent } from './views/main/main.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { EventosComponent } from './views/eventos/eventos.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    MenuComponent,
    FooterComponent,
    AccesoComponent,
    CarouselComponent,
    EscuelaComponent,
    BandasComponent,
    ContactoComponent,
    MainComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    GravatarModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faUser,
      faLock,
      faFacebook
    );
  }

 }
