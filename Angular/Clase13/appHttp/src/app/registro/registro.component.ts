import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../autenticacion.service';
import { IUsuario } from '../usuario.interface';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
	grupoForm: FormGroup

	constructor(private autenticacionService: AutenticacionService) { }

	ngOnInit() {
		this.grupoForm = new FormGroup({
			nombreCompleto: new FormControl(null, Validators.required),
			usuario: new FormControl(null, Validators.required),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	registrar() {
		const usuario: IUsuario = this.grupoForm.value
		this.autenticacionService.registrar(usuario)
			.subscribe(
				data => console.log(data)
			)
	}

}
