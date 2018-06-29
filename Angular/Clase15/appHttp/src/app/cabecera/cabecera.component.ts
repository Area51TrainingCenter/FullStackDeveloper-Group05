import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion.service';

@Component({
	selector: 'app-cabecera',
	templateUrl: './cabecera.component.html',
	styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	estaAutenticado: boolean = false

	constructor(private ruteador: Router, private autenticacionService: AutenticacionService) { }

	ngOnInit() {
		this.estaAutenticado = this.autenticacionService.estaAutenticado()

		this.autenticacionService.onCambioEstado
			.subscribe((estado: boolean) => this.estaAutenticado = estado)
	}

	irA(ruta: string) {
		this.ruteador.navigate([ruta])
	}

	cerrarSesion() {
		this.autenticacionService.logout()
	}

}
