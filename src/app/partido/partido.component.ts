import { Component, OnInit } from '@angular/core';
import { PartidoService } from "../services/partido.service";
import { BARCELONA,MADRID } from "../jugadores-mock";
@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
  data: any;
  equipos=[
    {jugadores:BARCELONA,nombre:'Barcelona'},
    {jugadores:MADRID,nombre:'Madrid'}
  ]
  constructor(private partido: PartidoService) { }

  ngOnInit(): void {
    // this.getPartido();
  }
  getPartido() {
    this.partido.get('606ddda5eb24000b3cf82267')
      .subscribe(data => this.data = data)
  }

}
