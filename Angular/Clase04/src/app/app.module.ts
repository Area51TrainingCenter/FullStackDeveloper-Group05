import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GeneradorNumeroComponent } from './generador-numero/generador-numero.component';
import { ImparComponent } from './impar/impar.component';
import { ParComponent } from './par/par.component';



@NgModule({
	declarations: [
		AppComponent,
		GeneradorNumeroComponent,
		ImparComponent,
		ParComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
