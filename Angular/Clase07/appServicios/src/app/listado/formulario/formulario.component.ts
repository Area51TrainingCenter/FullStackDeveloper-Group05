import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Libro } from '../../libro';
import { LibroService } from '../../libro.service';
import { LogService } from '../../log.service';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	//@Output() onNuevo = new EventEmitter<Libro>()
	@ViewChild("titulo") titulo: ElementRef
	@ViewChild("autor") autor: ElementRef
	@ViewChild("anno") anno: ElementRef

	//logService: LogService

	constructor(private logService: LogService, private libroService: LibroService) { }

	ngOnInit() {
	}

	agregar() {
		const libro: Libro = {
			titulo: this.titulo.nativeElement.value,
			autor: this.autor.nativeElement.value,
			anno: this.anno.nativeElement.value
		}


		this.libroService.agregar(libro)
		//this.onNuevo.emit(libro)
		this.reset()

		//this.logService = new LogService()
		//this.logService.escribir("Libro agregado")
	}

	reset() {
		this.titulo.nativeElement.value = ""
		this.autor.nativeElement.value = ""
		this.anno.nativeElement.value = 0
	}

}
