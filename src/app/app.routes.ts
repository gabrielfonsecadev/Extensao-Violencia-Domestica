import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreViolenciaComponent } from './components/sobre-violencia/sobre-violencia.component';
import { ComoDenunciarComponent } from './components/como-denunciar/como-denunciar.component';
import { RedeApoioComponent } from './components/rede-apoio/rede-apoio.component';
import { MaterialEducativoComponent } from './components/material-educativo/material-educativo.component';
import { ContatoComponent } from './components/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-violencia', component: SobreViolenciaComponent },
  { path: 'como-denunciar', component: ComoDenunciarComponent },
  { path: 'rede-apoio', component: RedeApoioComponent },
  { path: 'material-educativo', component: MaterialEducativoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];
