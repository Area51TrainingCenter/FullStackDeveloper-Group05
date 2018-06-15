import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	vehiculos: Array<{}>
	marcas: Array<{}>

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.vehiculos = this.dataService.dataVehiculos
		this.marcas = this.dataService.dataMarcas

		this.dataService.subject.subscribe(
			data => this.vehiculos = data
		)
	}

}
