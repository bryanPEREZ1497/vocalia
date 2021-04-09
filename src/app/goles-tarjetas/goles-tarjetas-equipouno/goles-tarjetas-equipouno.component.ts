import { Component, OnInit } from '@angular/core';
import { BARCELONA } from "../../jugadores-mock";
import { Jugador } from "../../jugador";
import { PartidoService } from "../../services/partido.service";
@Component({
  selector: 'app-goles-tarjetas-equipouno',
  templateUrl: './goles-tarjetas-equipouno.component.html',
  styleUrls: ['./goles-tarjetas-equipouno.component.css']
})
export class GolesTarjetasEquipounoComponent implements OnInit {
  goleadores: Jugador[] = [];
  goles: number = 0;
  constructor(private partidoService: PartidoService) { }

  ngOnInit(): void {
  }
  newGoal(camiseta: number): void {
    for (let jugador of BARCELONA) {
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
  plus(goleador: any): void {
    goleador.goles++;
    this.goles++;
  }
  minus(goleador: any): void {
    goleador.goles--;
    this.goles--;
    if (!goleador.goles) {
      let index = this.goleadores.indexOf(goleador);
      this.goleadores.splice(index, 1);
    }
  }
  save(): void {
    this.partidoService.save(this.goleadores, '606ddda5eb24000b3cf82267')
      .subscribe(data => console.log(data));
  }
}