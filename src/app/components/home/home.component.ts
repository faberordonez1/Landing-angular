import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string;
public valorHome:number= 10000;

  constructor() { 
    this.title="Ultimos Articulos";
  }

  ngOnInit(): void {
    this.aumentar();
  }
  aumentar(){
    for (let index = 0; index < 10; index++) {
     
      setTimeout(()=>{
        this.valorHome +=100000;
      },1000)
      
    }
  }

}
