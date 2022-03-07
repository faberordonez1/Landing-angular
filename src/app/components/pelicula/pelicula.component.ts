import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {


  public titulo: string;
  public peliculas:Pelicula[];
  public favorita!:Pelicula;

  constructor(private _peliculaSvc:PeliculaService) { 
    this.titulo = "Listado de peliculas"
    this.peliculas = _peliculaSvc.getPeliculas();
  }

  ngOnInit(): void {
    console.log(this.peliculas[0].title);
  }

  mostrarFavorita(event:any){
    this.favorita = event.pelicula;
    //this.favorita = peliFavorita;
    console.log("Soy favorita");    

    console.log(event);
    
  }

}
