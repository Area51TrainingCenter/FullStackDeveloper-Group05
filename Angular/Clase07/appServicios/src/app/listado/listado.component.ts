import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { LogService } from '../log.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	data: Libro[]
	/*@Output() onSeleccion = new EventEmitter<Libro>()
	@Output() onNuevo = new EventEmitter<Libro>()*/

	//logService: LogService

	constructor(private logService: LogService, private libroService: LibroService) {
		//this.logService = logService
	}

	ngOnInit() {
		this.data = this.libroService.listar()
		//this.logService = new LogService()
	}

	seleccionar(libro: Libro) {
		this.libroService.onSeleccion.emit(libro)
		//this.libroService.libroSeleccionado = libro
		//this.onSeleccion.emit(libro)
		this.logService.escribir("Libro seleccionado")
	}

	/*agregar(libro: Libro) {
		this.onNuevo.emit(libro)
	}*/

}
