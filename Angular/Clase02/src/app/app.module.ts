import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppAlerta } from './alerta/alerta';
import { AppComponent } from './app.component';
import { AppConformidad } from './conformidad/conformidad';

@NgModule({
	declarations: [
		AppComponent,
		AppAlerta,
		AppConformidad
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
