import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivosComponent } from './activos/activos.component';
import { AppComponent } from './app.component';
import { CesadosComponent } from './cesados/cesados.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { ExternoComponent } from './externo/externo.component';
import { GeneradorNumeroComponent } from './generador-numero/generador-numero.component';
import { ImparComponent } from './impar/impar.component';
import { ItemComponent } from './item/item.component';
import { ParComponent } from './par/par.component';
import { PersonalComponent } from './personal/personal.component';



@NgModule({
	declarations: [
		AppComponent,
		GeneradorNumeroComponent,
		ImparComponent,
		ParComponent,
		ContenedorComponent,
		ItemComponent,
		ExternoComponent,
		PersonalComponent,
		ActivosComponent,
		CesadosComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [PersonalComponent]
})
export class AppModule { }
