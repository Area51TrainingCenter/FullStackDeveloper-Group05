import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICantante } from '../cantante.interface';
import { CantanteService } from '../cantante/cantante.service';

@Component({
	selector: 'app-cantante',
	templateUrl: './cantante.component.html',
	styleUrls: ['./cantante.component.css']
})
export class CantanteComponent implements OnInit {
	//cantantes: ICantante[]
	cantantes: Observable<ICantante[]>

	constructor(private cantanteService: CantanteService, private ruteador: Router) { }

	ngOnInit() {
		this.cantantes = this.cantanteService.listar()

		this.cantanteService.cambioEstado.subscribe(
			cambio => this.cantantes = this.cantanteService.listar()
		)
		/*this.cantanteService.listar()
			.subscribe(
				(lista: ICantante[]) => this.cantantes = lista
			)*/
	}

	agregar() {
		this.ruteador.navigate(["cantante", "nuevo"])
	}

	eliminar(_id) {
		this.cantanteService.eliminar(_id)
	}

}
