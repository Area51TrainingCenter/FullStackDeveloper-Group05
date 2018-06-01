import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html',
	styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
	//@Input() seleccion: Libro
	seleccion: Libro

	constructor(private libroService: LibroService) { }

	ngOnInit() {
		//this.seleccion = this.libroService.libroSeleccionado
		this.libroService.onSeleccion.subscribe(
			libro => {
				this.seleccion = libro
			}
		)
	}

}
