import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-par',
	templateUrl: './par.component.html',
	styleUrls: ['./par.component.css']
})
export class ParComponent implements OnInit {
	@Input() numero: number
	constructor() { }

	ngOnInit() {
	}

}
