import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	permitido: boolean = true
	estado: string = "No hay tareas agregadas"
	tareaAgregada: string = ""
	propietario: string = ""

	constructor() {
		setTimeout(
			() => {
				this.permitido = false
			},
			3000)
	}

	agregarTarea() {
		//this.estado = "Se ha agregado una tarea: " + this.tareaAgregada
		this.estado = `
			Se ha agregado una tarea: ${this.tareaAgregada}
		`
	}

	setearNombreTarea(evento: Event) {
		this.tareaAgregada = (<HTMLInputElement>evento.target).value
		//console.log(valor)
	}

	agregarPropietario() {
		this.propietario = ""
	}


}
