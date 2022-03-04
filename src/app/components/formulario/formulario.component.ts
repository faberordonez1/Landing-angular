import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
	public user: any;

	constructor() {
        /**Campos capturados del form */
		this.user = {
			nombre: '',
			apellidos: '',
			bio: '',
			gen: '',
		};
	}

	ngOnInit(): void {}
	onSubmit() {
        console.log(this.user)
        console.log(this.user.nombre)
	}
}
