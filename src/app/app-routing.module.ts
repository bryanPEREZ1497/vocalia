import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolesTarjetasEquipounoComponent } from './goles-tarjetas-equipouno/goles-tarjetas-equipouno.component';
import { PartidoComponent } from "./partido/partido.component";
import { ListaJugadoresComponent } from "./lista-jugadores/lista-jugadores.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  {
    path: 'goles',
    component: GolesTarjetasEquipounoComponent
///<<<<<<< HEAD
    
///=======
    // canActivate: [AuthGuard]
///>>>>>>> f2d12e98fddfc2a8e31264bb2723599af1732c4f
  }, {
    path: 'lista',
    component: ListaJugadoresComponent
    // canActivate: [AuthGuard]
  }, {
    path: 'partido',
    component: PartidoComponent
    // canActivate: [AuthGuard]
  }, {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// , {
//     path: '',
//     redirectTo: '/partido',
//     pathMatch: 'full'
//   }