import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HistorialComponent } from './historial/historial.component';
import { EquipoComponent } from './listado/equipo/equipo.component';
import { ListadoComponent } from './listado/listado.component';
import { BasicaDirective } from './misDirectivas/basica.directive';
import { PruebasDirectivasComponent } from './pruebas-directivas/pruebas-directivas.component';
import { MejoradaDirective } from './misDirectivas/mejorada.directive';
import { ListenerDirective } from './misDirectivas/listener.directive';


@NgModule({
	declarations: [
		AppComponent,
		FormularioComponent,
		ListadoComponent,
		HistorialComponent,
		EquipoComponent,
		BasicaDirective,
		PruebasDirectivasComponent,
		MejoradaDirective,
		ListenerDirective
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [PruebasDirectivasComponent]
})
export class AppModule { }
