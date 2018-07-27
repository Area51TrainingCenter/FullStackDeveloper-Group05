import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EdicionCantanteComponent } from '../edicion-cantante/edicion-cantante.component';

@Component({
	selector: 'app-listado-cantante',
	templateUrl: './listado-cantante.component.html',
	styleUrls: ['./listado-cantante.component.css']
})
export class ListadoCantanteComponent implements OnInit {

	constructor(private dialogo: MatDialog) { }

	ngOnInit() {
	}

	agregar() {
		this.dialogo.open(EdicionCantanteComponent)
	}

}
