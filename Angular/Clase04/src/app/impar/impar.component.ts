import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-impar',
	templateUrl: './impar.component.html',
	styleUrls: ['./impar.component.css']
})
export class ImparComponent implements OnInit {

	@Input() numero: number

	constructor() { }

	ngOnInit() {
	}

}
