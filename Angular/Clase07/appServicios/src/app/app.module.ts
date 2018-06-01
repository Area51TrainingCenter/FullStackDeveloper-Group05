import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivosComponent } from './activos/activos.component';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { InactivosComponent } from './inactivos/inactivos.component';
import { LibroService } from './libro.service';
import { FormularioComponent } from './listado/formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { LogService } from './log.service';
import { SeleccionLibroComponent } from './seleccion-libro/seleccion-libro.component';
import { UsuarioService } from './usuario.service';


@NgModule({
	declarations: [
		AppComponent,
		ListadoComponent,
		FormularioComponent,
		DetalleComponent,
		SeleccionLibroComponent,
		ActivosComponent,
		InactivosComponent
	],
	imports: [
		BrowserModule
	],
	providers: [LogService, LibroService, UsuarioService],
	bootstrap: [AppComponent]
})
export class AppModule { }
