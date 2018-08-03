import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SeguridadService } from '../../servicios/seguridad.service';
import { IUsuario } from '../../modelos/usuario.model';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	grupoFormulario: FormGroup

	constructor(private formBuilder: FormBuilder, private seguridadService: SeguridadService, private notificador: MatSnackBar) { }

	ngOnInit() {
		this.grupoFormulario = this.crearGrupo()
		this.seguridadService.onErrorLogueo.subscribe(
			(data: boolean) => {
				if (data) return

				this.notificador.open("El correo y/o la contraseña son inválidos", null, { duration: 2000 })
			}
		)
	}

	crearGrupo() {
		return this.formBuilder.group({
			correo: [null, Validators.required],
			contrasena: [null, Validators.required]
		})
	}

	login() {
		const usuario: IUsuario = this.grupoFormulario.value

		this.seguridadService.login(usuario)
	}

}
