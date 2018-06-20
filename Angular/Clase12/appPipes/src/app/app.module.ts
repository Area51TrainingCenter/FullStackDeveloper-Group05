import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReducidorPipe } from './reducidor.pipe';
import { FiltrarNovelasPipe } from './filtrar-novelas.pipe';


@NgModule({
	declarations: [
		AppComponent,
		ReducidorPipe,
		FiltrarNovelasPipe
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
