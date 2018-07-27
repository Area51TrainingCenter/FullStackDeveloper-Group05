import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoCantanteComponent } from './listado-cantante/listado-cantante.component';

const routes: Routes = [
	{ path: "", component: ListadoCantanteComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CantanteRoutingModule { }
