import { Component, OnInit } from '@angular/core';
import { BARCELONA } from "../jugadores-mock";
import { Jugador } from "../jugador";

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  jugadores: Jugador[] = [];
  constructor() { }

  ngOnInit(): void {
    this.jugadores = BARCELONA;
  }

}
