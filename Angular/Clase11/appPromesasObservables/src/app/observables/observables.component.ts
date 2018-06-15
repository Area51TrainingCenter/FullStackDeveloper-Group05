import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
	selector: 'app-observables',
	templateUrl: './observables.component.html',
	styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
	observable: Observable<string>
	suscripcion: Subscription

	constructor() { }

	ngOnInit() {
		this.observable = Observable.create(
			(observador: Observer<string>) => {
				setTimeout(() => {
					observador.next("La tía llegó")
				}, 3000)

				setTimeout(() => {
					observador.next("Llegó el inspector municipal")
				}, 5000)

				setTimeout(() => {
					observador.complete()
				}, 7000)

				setTimeout(() => {
					observador.error("Se quemó la casa")
				}, 8000)

				setTimeout(() => {
					observador.next("Llegó el cobrador del seguro")
				}, 10000)
			}
		)

		this.suscripcion = this.observable.subscribe(
			msgNext => console.log(msgNext),
			msgError => console.log(msgError),
			() => console.log("Se acabó la jornada del observador")
		)
	}

	ngOnDestroy() {
		this.suscripcion.unsubscribe()
	}

}
