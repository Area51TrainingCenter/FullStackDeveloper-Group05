import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-no-encontrada',
	templateUrl: './no-encontrada.component.html',
	styleUrls: ['./no-encontrada.component.css']
})
export class NoEncontradaComponent implements OnInit {
	mensaje: string

	constructor(private rutaActiva: ActivatedRoute) { }

	ngOnInit() {
		this.mensaje = this.rutaActiva.snapshot.data["msg"]
	}

}
