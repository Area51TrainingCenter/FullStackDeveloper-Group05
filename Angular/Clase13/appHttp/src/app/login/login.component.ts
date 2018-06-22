import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../autenticacion.service';
import { IUsuario } from '../usuario.interface';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	grupoForm: FormGroup

	constructor(private autenticacionService: AutenticacionService) { }

	ngOnInit() {
		this.grupoForm = new FormGroup({
			usuario: new FormControl(null, Validators.required),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	login() {
		const usuario: IUsuario = this.grupoForm.value
		this.autenticacionService.login(usuario)
	}
}
