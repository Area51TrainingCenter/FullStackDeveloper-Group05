import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICantante } from '../../cantante.interface';
import { CantanteService } from '../cantante.service';

@Component({
	selector: 'app-cantante-nuevo',
	templateUrl: './cantante-nuevo.component.html',
	styleUrls: ['./cantante-nuevo.component.css']
})
export class CantanteNuevoComponent implements OnInit {
	grupoForm: FormGroup

	constructor(private cantanteService: CantanteService, private ruteador: Router) { }

	ngOnInit() {
		this.grupoForm = new FormGroup({
			nombre: new FormControl(null, Validators.required)
		})
	}

	nuevo() {
		if (this.grupoForm.valid) {
			const cantante: ICantante = this.grupoForm.value
			this.cantanteService.insertar(cantante)
				.subscribe(
					respuesta => {
						this.grupoForm.reset()
						this.ruteador.navigate(["/cantante"])
						this.cantanteService.cambioEstado.next()

					}
				)
		}

	}

}
