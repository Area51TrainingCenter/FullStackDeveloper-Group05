import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { EdicionCantanteComponent } from '../edicion-cantante/edicion-cantante.component';
import { CantanteService } from '../../servicios/cantante.service';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-listado-cantante',
	templateUrl: './listado-cantante.component.html',
	styleUrls: ['./listado-cantante.component.css']
})
export class ListadoCantanteComponent implements OnInit {

	constructor(private dialogo: MatDialog, private cantanteService: CantanteService, private notificador: MatSnackBar) { }

	ngOnInit() {
	}

	agregar() {
		const referencia: MatDialogRef<EdicionCantanteComponent> = this.dialogo.open(EdicionCantanteComponent, {
			width: "400px",
			disableClose: true,
			data: {
				accion: "nuevo"
			}
		})

		referencia.afterClosed().subscribe(respuesta => {
			if (!respuesta) return

			const datos: FormGroup = respuesta

			this.cantanteService.insertar(datos.getRawValue())
				.subscribe(
					() => this.notificador.open("Cantante grabado", null, { duration: 2000 }),
					() => this.notificador.open("Ocurrió un error", null, { duration: 2000 })
				)
		})
	}

}
