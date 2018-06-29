import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticacionGuard } from "../autenticacion.guard";
import { CantanteEdicionComponent } from "../cantante/cantante-edicion/cantante-edicion.component";
import { CantanteNuevoComponent } from "../cantante/cantante-nuevo/cantante-nuevo.component";
import { CantanteComponent } from "../cantante/cantante.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegistroComponent } from "../registro/registro.component";

const rutas: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "login", component: LoginComponent },
	{ path: "registro", component: RegistroComponent },
	{
		path: "cantante", component: CantanteComponent, canActivate: [AutenticacionGuard], children: [
			{ path: "nuevo", component: CantanteNuevoComponent },
			{ path: "edicion/:id", component: CantanteEdicionComponent }
		]
	},
	{ path: "**", redirectTo: "" }
]

@NgModule({
	imports: [
		RouterModule.forRoot(rutas)
	],
	declarations: [],
	exports: [
		RouterModule
	]

})
export class NucleoRoutingModule { }