import { Component, OnInit } from '@angular/core';
import { BARCELONA, MADRID } from "../jugadores-mock";
import { Jugador } from "../jugador";

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  observaciones = {
    equipo1:[]
  }
  jugadores: Jugador[] = [];
  jugadores2: Jugador[] = [];
  constructor() { }

  ngOnInit(): void {
    this.jugadores = BARCELONA;
    this.jugadores2 = MADRID;
  }
  newObservacion(observacion:string){
    this.observaciones.equipo1.push(observacion);
  }
}
