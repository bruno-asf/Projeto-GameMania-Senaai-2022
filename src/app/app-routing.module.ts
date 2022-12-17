import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { CaixasomComponent } from './views/caixasom/caixasom.component';
import { ControleComponent } from './views/controle/controle.component';
import { HomeComponent } from './views/home/home.component';
import { InformaticaComponent } from './views/informatica/informatica.component';
import { MouseComponent } from './views/mouse/mouse.component';
import { NintendoComponent } from './views/nintendo/nintendo.component';
import { PlaystationComponent } from './views/playstation/playstation.component';
import { XboxComponent } from './views/xbox/xbox.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "playstation", component: PlaystationComponent },
  {path: "nintendo", component: NintendoComponent },
  {path: "xbox", component: XboxComponent},
  {path: "acessorios", component: AcessoriosComponent },
  {path: "informatica", component: InformaticaComponent},
  {path: "mouse", component: MouseComponent },
  {path: "controle", component: ControleComponent },
  {path: "caixasom", component: CaixasomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
