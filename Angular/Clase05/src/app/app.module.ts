import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { HistorialComponent } from './historial/historial.component';
import { EquipoComponent } from './listado/equipo/equipo.component';


@NgModule({
	declarations: [
		AppComponent,
		FormularioComponent,
		ListadoComponent,
		HistorialComponent,
		EquipoComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
