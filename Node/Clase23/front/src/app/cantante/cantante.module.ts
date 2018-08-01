import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { CantanteRoutingModule } from './cantante-routing.module';
import { ListadoCantanteComponent } from './listado-cantante/listado-cantante.component';
import { MaterialModule } from '../material/material.module';
import { EdicionCantanteComponent } from './edicion-cantante/edicion-cantante.component';

@NgModule({
	imports: [
		CommonModule,
		CantanteRoutingModule,
		MaterialModule,
		ReactiveFormsModule
	],
	declarations: [ListadoCantanteComponent, EdicionCantanteComponent],
	entryComponents: [EdicionCantanteComponent]
})
export class CantanteModule { }
