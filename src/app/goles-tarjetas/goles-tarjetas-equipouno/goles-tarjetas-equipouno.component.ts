import { Component, OnInit } from '@angular/core';
import { JUGADORES } from "../../jugadores-mock";
import { Jugador } from "../../jugador";
@Component({
  selector: 'app-goles-tarjetas-equipouno',
  templateUrl: './goles-tarjetas-equipouno.component.html',
  styleUrls: ['./goles-tarjetas-equipouno.component.css']
})
export class GolesTarjetasEquipounoComponent implements OnInit {
  goleadores: Jugador[] = [];
  goles: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  newGoal(camiseta: number): void {
    for (let jugador of JUGADORES) {
      if (jugador.camiseta == camiseta) {
        if (this.goleadores.includes(jugador)) {
          this.plus(camiseta);
          return;
        }
        this.goleadores.push(jugador);
        this.goleadores[this.goleadores.length - 1].goles++;
        this.goles++;
      }
    }
  }
  plus(camiseta: number): void {
    for (let goleador of this.goleadores) {
      if (goleador.camiseta == camiseta) {
        goleador.goles++;
        this.goles++;
      }
    }
  }
  minus(camiseta: number): void {
    for (let goleador of this.goleadores) {
      if (goleador.camiseta == camiseta) {
        goleador.goles--;
        this.goles--;
        if (!goleador.goles) {
          let index = this.goleadores.indexOf(goleador);
          this.goleadores.splice(index, 1);
        }
      }
    }
  }
}