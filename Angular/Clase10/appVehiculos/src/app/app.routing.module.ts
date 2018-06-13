import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DataSalvadaGuard } from './data-salvada.guard';
import { EdicionComponent } from './edicion/edicion.component';
import { AutenticacionGuards } from './guards/autenticacion.guard';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { NoEncontradaComponent } from './no-encontrada/no-encontrada.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { VehiculosResolve } from './resolves/vehiculos.resolve';

const rutas: Route[] = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{
		path: "vehiculos", component: ListadoComponent, canActivateChild: [AutenticacionGuards], children: [
			{ path: ":id/edicion", component: EdicionComponent, canDeactivate: [DataSalvadaGuard] },
			{ path: "nuevo", component: NuevoComponent, canActivate: [AutenticacionGuards] }
		],
		resolve: {
			listadoVehiculos: VehiculosResolve
		}
	},
	{
		path: "no-existe", component: NoEncontradaComponent, data: {
			msg: "Path not found"
		}
	},
	{ path: "**", redirectTo: "no-existe" }


	/*
		path: "vehiculos", component: ListadoComponent, children: [
			{ path: ":id/edicion", component: EdicionComponent },
			{ path: "nuevo", component: NuevoComponent }
		]
	*/
]

@NgModule({
	imports: [
		RouterModule.forRoot(rutas),
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }