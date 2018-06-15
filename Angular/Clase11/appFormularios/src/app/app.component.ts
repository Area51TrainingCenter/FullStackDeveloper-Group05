import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	/*grabar(form: HTMLFormElement) {
		console.log(form)
	}*/

	grabar(form: NgForm) {
		console.log(form)
	}

}
