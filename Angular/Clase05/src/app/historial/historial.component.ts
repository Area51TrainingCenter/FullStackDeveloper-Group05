import { Component, Input, OnInit } from '@angular/core';
import { Ihistorial } from '../iequipo';

@Component({
	selector: 'app-historial',
	templateUrl: './historial.component.html',
	styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
	@Input() historial: Array<Ihistorial>


	constructor() { }

	ngOnInit() {
	}

}
