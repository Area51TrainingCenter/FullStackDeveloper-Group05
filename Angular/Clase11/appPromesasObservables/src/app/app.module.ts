import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { ObservablesComponent } from './observables/observables.component';

const rutas: Route[] = [
	{ path: "", component: HomeComponent },
	{
		path: "listado", component: ListadoComponent, resolve: {
			datos: DataService
		}
	}
]

@NgModule({
	declarations: [
		AppComponent,
		ObservablesComponent,
		HomeComponent,
		ListadoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
