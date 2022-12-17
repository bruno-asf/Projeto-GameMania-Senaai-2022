import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaystationComponent } from './views/playstation/playstation.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { NintendoComponent } from './views/nintendo/nintendo.component';
import { XboxComponent } from './views/xbox/xbox.component';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { InformaticaComponent } from './views/informatica/informatica.component';
import { MouseComponent } from './views/mouse/mouse.component';
import { ControleComponent } from './views/controle/controle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CaixasomComponent } from './views/caixasom/caixasom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaystationComponent,
    HeaderComponent,
    FooterComponent,
    NintendoComponent,
    XboxComponent,
    AcessoriosComponent,
    InformaticaComponent,
    MouseComponent,
    ControleComponent,
    CaixasomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
