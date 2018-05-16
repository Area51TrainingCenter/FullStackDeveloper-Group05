import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tarea',
	templateUrl: './tarea.component.html',
	styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {


	estado: string = ""

	constructor() {
		this.estado = Math.random() > .5 ? "En proceso" : "Cerrada"
	}

	claseEstado(): boolean {
		return this.estado === "En proceso"
	}

	colorEstado(): string {
		return this.estado === "En proceso" ? "green" : "red"
	}

	letraEstado(): string {
		return this.estado === "En proceso" ? "Arial" : "Verdana"
	}

	ngOnInit() {
	}

}
