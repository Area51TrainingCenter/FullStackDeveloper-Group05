import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppAlerta } from './alerta/alerta';
import { AppComponent } from './app.component';
import { AppConformidad } from './conformidad/conformidad';
import { TareaComponent } from './tarea/tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
	declarations: [
		AppComponent,
		AppAlerta,
		AppConformidad,
		TareaComponent,
		ListaTareasComponent,
		ListaComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
