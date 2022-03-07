import { Injectable } from '@angular/core';
import { Pelicula } from '../models/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  public peliculas:Pelicula[];

  constructor() { 
    this.peliculas=[
      //{year:2019,title:"Spider Man 4",imagen:"https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/10/Spider-Man-4-Fanat.jpg?fit=1280%2C720&quality=80&ssl=1"},
      new Pelicula(2019,"Spider Man 4","https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/10/Spider-Man-4-Fanat.jpg?fit=1280%2C720&quality=80&ssl=1" ),
      new Pelicula(2017,"Los vengadores","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-endgame-poster-1556056595.jpg?crop=1.00xw:0.352xh;0,0.131xh&resize=1200:*"),
      new Pelicula(2015,"Batman vs Superman","https://www.cinemascomics.com/wp-content/uploads/2020/06/snyder-cut-batman-vs-superman.jpg")
    ];
  }

  getPeliculas(){
    return this.peliculas;
  }
}

