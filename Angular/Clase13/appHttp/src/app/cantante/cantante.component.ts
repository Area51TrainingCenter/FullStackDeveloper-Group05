import { Component, OnInit } from '@angular/core';
import { CantanteService } from '../cantante.service';

@Component({
	selector: 'app-cantante',
	templateUrl: './cantante.component.html',
	styleUrls: ['./cantante.component.css']
})
export class CantanteComponent implements OnInit {

	constructor(private cantanteService: CantanteService) { }

	ngOnInit() {
		this.cantanteService.listar()
			.subscribe(
				respuesta => console.log(respuesta)
			)
	}

}
