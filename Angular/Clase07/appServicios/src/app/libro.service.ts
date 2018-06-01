import { EventEmitter, Injectable } from "@angular/core";
import { Libro } from "./libro";
import { LogService } from "./log.service";

@Injectable()
export class LibroService {
	private data: Libro[]
	//libroSeleccionado: Libro

	onSeleccion = new EventEmitter<Libro>()

	constructor(private logService: LogService) {
		this.data = [
			{ titulo: "El Perfume", autor: "Patrick Suskind", anno: 2002 },
			{ titulo: "La Ciudad y los Perros", autor: "Mario Vargas Llosa", anno: 1982 },
			{ titulo: "Rumbo al Mundial", autor: "Umberto Jara", anno: 2018 }
		]
	}

	listar(): Libro[] {
		return this.data
	}

	agregar(libro: Libro) {
		this.data.push(libro)
		this.logService.escribir("Se ha agregado un libro")
	}
}