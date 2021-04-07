import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolesTarjetasEquipounoComponent } from './goles-tarjetas/goles-tarjetas-equipouno/goles-tarjetas-equipouno.component';

const routes: Routes = [
  {
    path: 'goles',
    component: GolesTarjetasEquipounoComponent
  }, {
    path: '',
    redirectTo: '/goles',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
