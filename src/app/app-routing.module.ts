import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolesTarjetasComponent } from './goles-tarjetas/goles-tarjetas/goles-tarjetas.component';

const routes: Routes = [
  {
    path: 'goles',
    component: GolesTarjetasComponent
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
