import { Component, OnInit } from '@angular/core';
import { BARCELONA, MADRID } from "../jugadores-mock";
import { Jugador } from "../jugador";
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  equipos = [
    {
      nombre: 'Barcelona',
      src: "assets/images/barcelona-fc.png",
      jugadores: BARCELONA,
      sancionados: [],
      goles: 0,
      amarillas: 0,
      rojas: 0
    },
    {
      nombre: 'Madrid',
      src: "assets/images/Real-Madrid.png",
      jugadores: MADRID,
      sancionados: [],
      goles: 0,
      amarillas: 0,
      rojas: 0
    }]

  constructor() { }

  ngOnInit(): void {
  }
  searchTeam(name: string) {
    for (let equipo of this.equipos) {
      if (equipo.nombre == name) {
        return equipo;
      }
    }
  }
  Amarilla(camiseta: number, equipo: string): void {
    let team = this.searchTeam(equipo);
    for (let jugador of team.jugadores) {
      if (jugador.camiseta == camiseta) {
        if (team.sancionados.includes(jugador)) {
          let index = team.sancionados.indexOf(jugador);
          let sancionado = team.sancionados[index];
          this.plus(sancionado, team, 'amarilla');
          return;
        }
        team.sancionados.push(jugador);
        team.sancionados[team.sancionados.length - 1].amarillas++;
        team.amarillas++;
        return;
      }
    }
  }
  Roja(camiseta: number, equipo: string): void {
    let team = this.searchTeam(equipo);
    for (let jugador of team.jugadores) {
      if (jugador.camiseta == camiseta) {
        if (team.sancionados.includes(jugador)) {
          let index = team.sancionados.indexOf(jugador);
          let sancionado = team.sancionados[index];
          this.plus(sancionado, team, 'roja');
          return;
        }
        team.sancionados.push(jugador);
        team.sancionados[team.sancionados.length - 1].rojas++;
        team.rojas++;
        return;
      }
    }
  }
  plus(sancionado: any, team: any, tarjeta: string): void {
    if (tarjeta == 'amarilla') {
      sancionado.amarillas++;
      team.amarillas++;
      return;
    }
    sancionado.rojas++;
    team.rojas++;

  }
  minus(sancionado: any, team: any, tarjeta: string): void {
    if (tarjeta == 'amarilla') {
      sancionado.amarillas--;
      team.amarillas--;
    } else {
      sancionado.rojas--;
      team.rojas--;
    }

    if (!sancionado.amarillas && !sancionado.rojas) {
      let index = team.sancionados.indexOf(sancionado);
      team.sancionados.splice(index, 1);
    }
  }
  // save(): void {
  //   this.partidoService.save(this.goleadores, '606ddda5eb24000b3cf82267')
  //     .subscribe(data => console.log(data));
  // }

}
