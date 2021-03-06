import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppInterceptor } from "./app.interceptor";
import { AutenticacionGuard } from "./autenticacion.guard";
import { AutenticacionService } from "./autenticacion.service";
import { CantanteService } from "./cantante/cantante.service";
import { NucleoModule } from "./nucleo/nucleo.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NucleoModule
	],
	providers: [AutenticacionService, CantanteService, AutenticacionGuard, { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule { }
