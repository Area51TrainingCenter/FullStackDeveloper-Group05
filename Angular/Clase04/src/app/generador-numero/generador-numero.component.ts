import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-generador-numero',
	templateUrl: './generador-numero.component.html',
	styleUrls: ['./generador-numero.component.css']
})
export class GeneradorNumeroComponent implements OnInit {

	interval: any
	@Output() onNumero = new EventEmitter<number>()

	constructor() { }

	ngOnInit() {
	}

	iniciar() {
		//const numero: number = 0
		const numero: Array<number> = [0]
		this.interval = setInterval(() => {

			this.onNumero.emit(++numero[0])
		}, 1000)
	}

	detener() {
		clearInterval(this.interval)
	}

}
