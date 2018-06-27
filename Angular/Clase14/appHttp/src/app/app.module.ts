import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { AutenticacionGuard } from "./autenticacion.guard";
import { AutenticacionService } from "./autenticacion.service";
import { CantanteEdicionComponent } from './cantante/cantante-edicion/cantante-edicion.component';
import { CantanteNuevoComponent } from './cantante/cantante-nuevo/cantante-nuevo.component';
import { CantanteComponent } from './cantante/cantante.component';
import { CantanteService } from "./cantante/cantante.service";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

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
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		RegistroComponent,
		CantanteComponent,
		CantanteNuevoComponent,
		CantanteEdicionComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas),
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [AutenticacionService, CantanteService],
	bootstrap: [AppComponent]
})
export class AppModule { }
