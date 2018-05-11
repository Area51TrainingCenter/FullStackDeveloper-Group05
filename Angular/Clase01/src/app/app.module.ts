import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { miComponente } from './micomponente/micomponenteComponent';


@NgModule({
	declarations: [
		AppComponent,
		miComponente,
		ListaTareasComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [ListaTareasComponent]
})
export class AppModule { }
