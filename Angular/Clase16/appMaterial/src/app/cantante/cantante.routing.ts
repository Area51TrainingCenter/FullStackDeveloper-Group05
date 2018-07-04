import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticacionGuard } from "../autenticacion.guard";
import { CantanteEdicionComponent } from "./cantante-edicion/cantante-edicion.component";
import { CantanteNuevoComponent } from "./cantante-nuevo/cantante-nuevo.component";
import { CantanteComponent } from "./cantante.component";

const rutas: Routes = [
	{
		path: "", component: CantanteComponent, canActivate: [AutenticacionGuard], children: [
			{ path: "nuevo", component: CantanteNuevoComponent },
			{ path: "edicion/:id", component: CantanteEdicionComponent }
		]
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(rutas)
	],
	declarations: [],
	exports: [RouterModule]
})
export class CantanteRoutingModule { }