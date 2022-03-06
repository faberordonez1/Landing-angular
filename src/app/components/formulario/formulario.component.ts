import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
	public user: any;
	public campoevento:any;
	public campoevento2:any;

	constructor() {
		this.user = {/**Campos capturados del form */
			nombre: '',
			apellidos: '',
			bio: '',
			genero: '',
		};
	}

	ngOnInit(): void {}
	onSubmit() {
        console.log('Formulario enviado' + this.user)
	}
	hazDadoClick(){
		console.log('Haz Hecho click 😉');
		alert('Haz Hecho click 😉');
		
	}
	hazSalido(){
		console.log('Haz salido del Input 😎');
		alert('Haz salido del Input 😎');
	}
	hazPulsado($event:any){
		console.log('Haz pulsado la tecla', $event.key)
	}
}
