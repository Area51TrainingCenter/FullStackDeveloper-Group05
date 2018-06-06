import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-libro-listado',
	templateUrl: './libro-listado.component.html',
	styleUrls: ['./libro-listado.component.css']
})
export class LibroListadoComponent implements OnInit {

	constructor(private ruteador: Router, private rutaActiva: ActivatedRoute) { }

	ngOnInit() {
	}

	irADetalle() {
		this.ruteador.navigate([20, 'edicion'], {
			relativeTo: this.rutaActiva
		})
		// this.ruteador.navigate(['libros', 'edicion'])
		// http://localhost:4200/libros/edicion
	}

}
