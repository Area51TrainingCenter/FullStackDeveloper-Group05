import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { AutenticacionService } from "./autenticacion.service";
import { CantanteService } from "./cantante.service";
import { CantanteComponent } from './cantante/cantante.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const rutas: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "login", component: LoginComponent },
	{ path: "registro", component: RegistroComponent },
	{ path: "cantante", component: CantanteComponent },
	{ path: "**", redirectTo: "" }
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		RegistroComponent,
		CantanteComponent
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
