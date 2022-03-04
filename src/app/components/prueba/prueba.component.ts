import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public suma:number= 10;
  @Input() set valorPrueba (numH:number){this.calcularValor(numH)}

  constructor() { }

  ngOnInit(): void {
  }

  calcularValor(num:number){
  
      console.log('Soy num desde componente hijo => ' + num)
      this.suma  +=num;
      console.log(this.suma);
      
  }

}
