import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICantante } from '../../cantante.interface';
import { CantanteService } from '../cantante.service';

@Component({
	selector: 'app-cantante-edicion',
	templateUrl: './cantante-edicion.component.html',
	styleUrls: ['./cantante-edicion.component.css']
})
export class CantanteEdicionComponent implements OnInit {

	grupoForm: FormGroup
	_id: string

	constructor(private cantanteService: CantanteService, private ruteador: Router, private rutaActiva: ActivatedRoute) { }

	ngOnInit() {
		this._id = this.rutaActiva.snapshot.paramMap.get("id")
		this.mostrarDetalle()

		this.rutaActiva.paramMap.subscribe(
			(parametros: ParamMap) => {
				console.log(parametros)
				this._id = parametros.get("id")
				this.mostrarDetalle()
				console.log("parametros", this._id)
			}
		)

		console.log("componente id", this._id)


	}

	mostrarDetalle() {
		this.cantanteService.detalle(this._id)
			.subscribe(
				(cantante: ICantante) => {
					this.grupoForm = new FormGroup({
						nombre: new FormControl(cantante.nombre, Validators.required)
					})
				}
			)
	}

	modificar() {
		if (this.grupoForm.valid) {
			const cantante: ICantante = this.grupoForm.value
			cantante._id = this._id

			this.cantanteService.actualizar(cantante)
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
