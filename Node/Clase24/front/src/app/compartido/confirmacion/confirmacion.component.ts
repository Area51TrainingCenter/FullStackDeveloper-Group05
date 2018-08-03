import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-confirmacion',
	templateUrl: './confirmacion.component.html',
	styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

	mensaje: string

	constructor(@Inject(MAT_DIALOG_DATA) private data, private dialogRef: MatDialogRef<ConfirmacionComponent>) {
		this.mensaje = data.mensaje
	}

	ngOnInit() {
	}

}
