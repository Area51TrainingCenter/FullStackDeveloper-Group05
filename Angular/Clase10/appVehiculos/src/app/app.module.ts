import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DataSalvadaGuard } from './data-salvada.guard';
import { EdicionComponent } from './edicion/edicion.component';
import { AutenticacionGuards } from './guards/autenticacion.guard';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { NoEncontradaComponent } from './no-encontrada/no-encontrada.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { VehiculosResolve } from './resolves/vehiculos.resolve';
import { VehiculoService } from './servicios/vehiculo.service';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ListadoComponent,
		EdicionComponent,
		NuevoComponent,
		NoEncontradaComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [VehiculoService, AutenticacionGuards, DataSalvadaGuard, VehiculosResolve],
	bootstrap: [AppComponent]
})
export class AppModule { }
