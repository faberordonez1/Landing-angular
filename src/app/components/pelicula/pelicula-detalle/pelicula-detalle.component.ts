import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  @Input() pelicula!:Pelicula;
  @Input() i!:number;
  @Output() MarcarFavoritaEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  seleccionarFavorita(event:any, pelicula:Pelicula){
    this.MarcarFavoritaEvent.emit({pelicula:pelicula});
  }

}
