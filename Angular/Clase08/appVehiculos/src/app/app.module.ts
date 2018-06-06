import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { EdicionComponent } from './edicion/edicion.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { VehiculoService } from './servicios/vehiculo.service';

const rutas: Route[] = [
	{ path: "", component: HomeComponent },
	{ path: "vehiculos", component: ListadoComponent },
	{ path: "vehiculos/:id/edicion", component: EdicionComponent },
	{ path: "vehiculos/:id/nuevo", component: NuevoComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ListadoComponent,
		EdicionComponent,
		NuevoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [VehiculoService],
	bootstrap: [AppComponent]
})
export class AppModule { }
