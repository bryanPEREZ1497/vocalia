import { Component, OnInit } from '@angular/core';
import { BARCELONA, MADRID } from "../jugadores-mock";
import { Jugador } from "../jugador";
import { PartidoService } from "../services/partido.service";
@Component({
  selector: 'app-goles-tarjetas-equipouno',
  templateUrl: './goles-tarjetas-equipouno.component.html',
  styleUrls: ['./goles-tarjetas-equipouno.component.css']
})
export class GolesTarjetasEquipounoComponent implements OnInit {

  equipos = [
    {
      nombre: 'Barcelona',
      src: "assets/images/barcelona-fc.png",
      jugadores: BARCELONA,
      goleadores: [],
      goles: 0,
      amarillas: 0,
      rojas: 0
    },
    {
      nombre: 'Madrid',
      src: "assets/images/Real-Madrid.png",
      jugadores: MADRID,
      goleadores: [],
      goles: 0,
      amarillas: 0,
      rojas: 0
    }]

  constructor(private partidoService: PartidoService) { }

  ngOnInit(): void {
  }
  searchTeam(name: string) {
    for (let equipo of this.equipos) {
      if (equipo.nombre == name) {
        return equipo;
      }
    }
  }
  newGoal(camiseta: number, equipo: string): void {
    let team = this.searchTeam(equipo);
    for (let jugador of team.jugadores) {
      if (jugador.camiseta == camiseta) {
        if (team.goleadores.includes(jugador)) {
          let index = team.goleadores.indexOf(jugador);
          let goleador = team.goleadores[index];
          this.plus(goleador, team);
          return;
        }
        team.goleadores.push(jugador);
        team.goleadores[team.goleadores.length - 1].goles++;
        team.goles++;
        return;
      }
    }
  }
  plus(goleador: any, team: any): void {
    goleador.goles++;
    team.goles++;
  }
  minus(goleador: any, team: any): void {
    goleador.goles--;
    team.goles--;
    if (!goleador.goles) {
      let index = team.goleadores.indexOf(goleador);
      team.goleadores.splice(index, 1);
    }
  }
  // save(): void {
  //   this.partidoService.save(this.goleadores, '606ddda5eb24000b3cf82267')
  //     .subscribe(data => console.log(data));
  // }
}