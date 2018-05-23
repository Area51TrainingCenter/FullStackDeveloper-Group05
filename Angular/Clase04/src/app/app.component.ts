import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild("nombre") nombreInput: ElementRef
	@ViewChild("correo") correoInput: ElementRef

	pares: Array<number> = []
	impares: Array<number> = []

	registrar(nombre, correo) {
		console.log(nombre)
		console.log(correo)
	}

	colorearInputs() {
		this.nombreInput.nativeElement.style.backgroundColor = "yellow"

		const elementoCorreo = this.correoInput.nativeElement
		elementoCorreo.style.backgroundColor = "orange"


		console.log(this.nombreInput)
	}

	agregarNumero(numero: number) {
		if (numero % 2 == 0) {
			this.pares.push(numero)
		} else {
			this.impares.push(numero)
		}
	}
}
