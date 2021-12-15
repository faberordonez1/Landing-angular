import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';//import capturar parametros URL

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
 public nombre: string;
 public apellido:string;

  constructor(
    private _route:ActivatedRoute,//parametros
    private _router:Router//redirecciones
  ) { 
      this.nombre ="";
      this.apellido ="";
    }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      
      console.log(params['nombre']);
      this.nombre = params['nombre']
      this.apellido = params['apellido']
    });
  }
  redireccion(){
    //alert("Metodo redireccion");
    this._router.navigate(["/formulario"]);
    //this._router.navigate(["/ruta","param1","param2"]);//pasando parametros
  }

}
