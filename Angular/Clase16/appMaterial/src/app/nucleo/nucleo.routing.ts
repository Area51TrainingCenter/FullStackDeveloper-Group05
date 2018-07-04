import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AutenticacionGuard } from "../autenticacion.guard";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegistroComponent } from "../registro/registro.component";

const rutas: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "login", component: LoginComponent },
	{ path: "registro", component: RegistroComponent },
	{ path: "cantante", canLoad: [AutenticacionGuard], loadChildren: "../cantante/cantante.module#CantanteModule" },
	{ path: "**", redirectTo: "" }
]

@NgModule({
	imports: [
		RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules })
	],
	declarations: [],
	exports: [
		RouterModule
	]

})
export class NucleoRoutingModule { }