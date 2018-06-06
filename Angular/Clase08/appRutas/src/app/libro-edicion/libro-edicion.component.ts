import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-libro-edicion',
	templateUrl: './libro-edicion.component.html',
	styleUrls: ['./libro-edicion.component.css']
})
export class LibroEdicionComponent implements OnInit {
	id: number
	titulo: string
	anno: number
	fragmento: string

	suscripcion: Subscription
	suscripcionQS: Subscription
	suscripcionFM: Subscription

	constructor(private rutaActiva: ActivatedRoute, private ruteador: Router) { }

	ngOnInit() {
		this.id = +this.rutaActiva.snapshot.params["id"] // {id: 10}
		this.suscripcion = this.rutaActiva.params.subscribe(
			(parametros: Params) => this.id = parametros["id"]
		)

		//this.consulta(this.rutaActiva.snapshot.params["id"] * 2)

		this.titulo = this.rutaActiva.snapshot.queryParams.titulo
		this.anno = this.rutaActiva.snapshot.queryParams.anno
		this.suscripcionQS = this.rutaActiva.queryParams.subscribe(
			(queryParametros: Params) => {
				this.titulo = queryParametros.titulo
				this.anno = queryParametros.anno
			}
		)

		this.fragmento = this.rutaActiva.snapshot.fragment
		this.suscripcionFM = this.rutaActiva.fragment.subscribe(
			(fragmento: string) => this.fragmento = fragmento
		)
	}

	consulta(id: number) {
		if (id > 50) {
			alert("Registro alto")
		} else if (id <= 50) {
			alert("Registro bajo")
		}
	}

	irARegistro() {
		this.ruteador.navigate(["libros", 20, "edicion"],
			{
				queryParams: { titulo: "Los gallinazos sin plumas", anno: 1903 },
				fragment: "operador"
			}
		)
	}

	ngOnDestroy() {
		this.suscripcion.unsubscribe()
		this.suscripcionQS.unsubscribe()
	}

}
