import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild("f") formulario: NgForm

	grupoFormulario: FormGroup

	nombreUsuario: string = "Sergio"
	correoUsuario: string = "sergio@correo.com"

	extensionesNoValidas: string[] = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"]

	ngOnInit() {
		this.grupoFormulario = new FormGroup({
			"nombre": new FormControl("", Validators.required),
			"correo": new FormControl("", [Validators.required, Validators.email, this.validarCorreo.bind(this)])
		})
	}

	cargarData() {
		/*this.formulario.setValue({
			correo: "sergio.hidalgo@correo.com"
		})*/

		this.formulario.form.patchValue({
			correo: "sergio.hidalgo@area51.pe"
		})
	}

	cargarData2() {
		console.log(this.grupoFormulario)
		this.grupoFormulario.patchValue({
			correo: "sergio.hidalgo@area51.pe"
		})
	}

	resetear() {
		this.formulario.reset({
			nombre: "nombre original",
			correo: "correo-originald@prueba.com"
		})
	}

	resetear2() {
		this.grupoFormulario.reset({
			nombre: "nombre original",
			correo: "correo-originald@prueba.com"
		})
	}

	registrar() {
		console.log("nombre", this.formulario.value.nombre)
		console.log("correo", this.formulario.value.correo)
	}

	registrar2() {
		console.log("nombre", this.grupoFormulario.value.nombre)
		console.log("correo", this.grupoFormulario.value.correo)
	}

	validarCorreo(valor: FormControl): { [s: string]: boolean } {
		if (!valor) return null

		const partesCorreo = valor.value.split("@")

		if (partesCorreo[1]) {
			if (this.extensionesNoValidas.indexOf(partesCorreo[1].toLowerCase()) > -1) {
				return { "extensionInvalida": true }
			}
			return null
		}

		return null
	}
}
