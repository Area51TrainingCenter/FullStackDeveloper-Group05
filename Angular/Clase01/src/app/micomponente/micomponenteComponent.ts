import { Component } from '@angular/core';

@Component({
	selector: "[app-micomponente]",
	// template: "<h1>Este componente es muy bàsico</h1>"
	templateUrl: "./micomponenteComponent.html",
	styleUrls: ["./micomponenteComponent.css"]
})
export class miComponente {
	titulo: string = "Esta pàgina ya es dinàmica"
	fecha: Date = new Date()
	activo: boolean = true

	cambiarFecha() {
		this.fecha = new Date()
	}

	mostrarOcultar() {
		this.activo = !this.activo
	}

}