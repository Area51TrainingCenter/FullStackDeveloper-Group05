import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
	selector: 'app-seleccion-libro',
	templateUrl: './seleccion-libro.component.html',
	styleUrls: ['./seleccion-libro.component.css']
})
export class SeleccionLibroComponent implements OnInit {
	seleccion: Libro

	constructor(private libroService: LibroService) { }

	ngOnInit() {
		this.libroService.onSeleccion.subscribe(
			libro => {
				this.seleccion = libro
			}
		)
	}

}
