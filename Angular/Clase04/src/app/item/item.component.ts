import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

	@Input() entrada: string
	@ViewChild("titulo") titulo: ElementRef

	constructor() {
		console.log("constructor llamado")
	}

	ngOnChanges(cambios: SimpleChanges) {
		console.log(cambios)
		console.log("ngOnChanges llamado")
	}

	ngOnInit() {
		console.log("ngOnInit llamado")
		console.log("Título", this.titulo.nativeElement.textContent)
	}

	ngDoCheck() {
		console.log("ngDoCheck llamado")
	}

	ngOnDestroy() {
		console.log("ngOnDestroy llamado")
	}

	ejecutar() { }

}
