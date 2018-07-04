import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CantanteEdicionComponent } from './cantante-edicion/cantante-edicion.component';
import { CantanteNuevoComponent } from './cantante-nuevo/cantante-nuevo.component';
import { CantanteComponent } from './cantante.component';
import { CantanteRoutingModule } from './cantante.routing';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		CantanteRoutingModule
	],
	declarations: [
		CantanteComponent,
		CantanteNuevoComponent,
		CantanteEdicionComponent
	]
})
export class CantanteModule { }
