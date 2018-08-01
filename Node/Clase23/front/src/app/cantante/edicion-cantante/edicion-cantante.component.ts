import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ICantante } from '../../modelos/cantante.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-edicion-cantante',
	templateUrl: './edicion-cantante.component.html',
	styleUrls: ['./edicion-cantante.component.css']
})
export class EdicionCantanteComponent implements OnInit {

	titulo: string
	cantante: ICantante
	grupo: FormGroup

	constructor(@Inject(MAT_DIALOG_DATA) private datos, private formBuilder: FormBuilder, private ref: MatDialogRef<EdicionCantanteComponent>) { }

	ngOnInit() {
		if (this.datos.accion === "nuevo") {
			this.cantante = {}
			this.titulo = "Nuevo"
		} else {
			this.cantante = this.datos.cantante
			this.titulo = "Edición"
		}

		this.grupo = this.crearFormGroup()
	}

	crearFormGroup(): FormGroup {
		return this.formBuilder.group({
			nombre: [this.cantante.nombre, Validators.required],
			apellido: [this.cantante.apellido, Validators.required],
			foto: [this.cantante.foto, Validators.required]
		})
	}

}
