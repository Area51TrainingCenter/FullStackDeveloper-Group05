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
	tareaAsignada: boolean = false

	tareas: string[] = ["Tarea 1", "Tarea 2", "Tarea 3"]
	// tareas: Array<string>

	constructor() {
		setTimeout(
			() => {
				this.permitido = false
			},
			3000)
	}

	agregarTarea() {
		this.tareaAsignada = true
		this.tareas.push(this.tareaAgregada)
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
