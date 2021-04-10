import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolesTarjetasEquipounoComponent } from './goles-tarjetas-equipouno/goles-tarjetas-equipouno.component';
import { PartidoComponent } from "./partido/partido.component";
import { ListaJugadoresComponent } from "./lista-jugadores/lista-jugadores.component";
const routes: Routes = [
  {
    path: 'partido',
    component: PartidoComponent
  }, {
    path: 'goles',
    component: GolesTarjetasEquipounoComponent
  }, {
    path: 'lista',
    component: ListaJugadoresComponent
  }, {
    path: '',
    redirectTo: '/partido',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
