import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { CantanteEdicionComponent } from '../cantante/cantante-edicion/cantante-edicion.component';
import { CantanteNuevoComponent } from '../cantante/cantante-nuevo/cantante-nuevo.component';
import { CantanteComponent } from '../cantante/cantante.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { NucleoRoutingModule } from './nucleo.routing';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		NucleoRoutingModule
	],
	declarations: [
		HomeComponent,
		LoginComponent,
		RegistroComponent,
		CantanteComponent,
		CantanteNuevoComponent,
		CantanteEdicionComponent,
		CabeceraComponent
	],
	exports: [
		CabeceraComponent
	]
})
export class NucleoModule { }
