import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MiColorDirective } from './directivas/miColor.directive';
import { ListaDirective } from './directivas/lista.directive';
import { HoverDirective } from './directivas/hover.directive';
import { AgregarliDirective } from './directivas/agregarli.directive';
import { HoverAvanzadoDirective } from './directivas/hover-avanzado.directive';
import { DistritosDirective } from './directivas/distritos.directive';
import { ProcesandoDirective } from './directivas/procesando.directive';


@NgModule({
	declarations: [
		AppComponent,
		MiColorDirective,
		ListaDirective,
		HoverDirective,
		AgregarliDirective,
		HoverAvanzadoDirective,
		DistritosDirective,
		ProcesandoDirective
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
