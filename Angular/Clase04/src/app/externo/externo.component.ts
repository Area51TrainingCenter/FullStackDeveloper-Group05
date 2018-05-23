import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
	selector: 'app-externo',
	templateUrl: './externo.component.html',
	styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {
	@ContentChild("tituloExterno") titulo: ElementRef

	constructor() { }

	ngOnInit() {
	}

	ngAfterContentInit() {
		console.log("ngAfterContentInit llamado")
		console.log(this.titulo.nativeElement.textContent)
	}

	ngAfterContentChecked() {
		console.log("ngAfterContentChecked")
	}

}
