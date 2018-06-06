import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibroEdicionComponent } from './libro-edicion/libro-edicion.component';
import { LibroListadoComponent } from './libro-listado/libro-listado.component';

const rutas: Route[] = [
	{ path: "", component: HomeComponent },
	{ path: "libros", component: LibroListadoComponent },
	{ path: "libros/:id/edicion", component: LibroEdicionComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LibroListadoComponent,
		LibroEdicionComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
