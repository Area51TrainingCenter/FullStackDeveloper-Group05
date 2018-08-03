import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatPaginator, MatSnackBarRef, SimpleSnackBar, MatSort } from '@angular/material';
import { EdicionCantanteComponent } from '../edicion-cantante/edicion-cantante.component';
import { CantanteService } from '../../servicios/cantante.service';
import { FormGroup } from '@angular/forms';
import { ICantante } from '../../modelos/cantante.model';
import { merge, Subject } from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';
import { ConfirmacionComponent } from '../../compartido/confirmacion/confirmacion.component';

@Component({
	selector: 'app-listado-cantante',
	templateUrl: './listado-cantante.component.html',
	styleUrls: ['./listado-cantante.component.css']
})
export class ListadoCantanteComponent implements OnInit {

	columnasAMostrar: string[] = ["nombre", "apellido", "botones"]

	miData: ICantante[] = []

	observador: Subject<any> = new Subject()

	@ViewChild(MatPaginator) paginador: MatPaginator
	@ViewChild(MatSort) sort: MatSort;

	longitud: number

	constructor(private dialogo: MatDialog, private cantanteService: CantanteService, private notificador: MatSnackBar, private dialog: MatDialog) { }

	ngOnInit() {

		merge(this.paginador.page, this.observador, this.sort.sortChange)
			.pipe(
				startWith({}),
				switchMap(() => {
					const campoAOrdenar = this.sort.active
					const direccion = this.sort.direction == "asc" ? 1 : -1
					return this.cantanteService.listadoPaginado(this.paginador.pageIndex, campoAOrdenar, direccion)
				}),
				map((respuesta: any) => {
					this.longitud = respuesta.cantidadRegistros
					return respuesta.registros
				})
			)
			.subscribe(data => this.miData = data)


		/*this.cantanteService.listar()
			.subscribe(
				(registros: ICantante[]) => this.miData = registros
			)*/
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
			const fd = new FormData()
			fd.append("nombre", datos.value.nombre)
			fd.append("apellido", datos.value.apellido)
			fd.append("foto", datos.value.foto)

			this.cantanteService.insertar(fd)
				.subscribe(
					() => {
						this.notificador.open("Cantante grabado", null, { duration: 2000 })
						this.observador.next(true)
					},
					() => this.notificador.open("Ocurrió un error", null, { duration: 2000 })
				)
		})
	}

	eliminar(id: string) {
		const ref: MatDialogRef<ConfirmacionComponent> = this.dialog.open(ConfirmacionComponent, {
			width: "320px",
			disableClose: true,
			data: {
				mensaje: "¿Está seguro de eliminar al cantante?"
			}
		})

		ref.afterClosed().subscribe(
			(respuesta: boolean) => {
				if (respuesta) {
					this.cantanteService.eliminar(id).subscribe(
						() => {
							const refNot: MatSnackBarRef<SimpleSnackBar> = this.notificador.open("El registro se eliminó", null, { duration: 2000 })

							refNot.afterDismissed().subscribe(
								() => this.observador.next()
							)
						}
					)
				}
			}
		)

	}

}
