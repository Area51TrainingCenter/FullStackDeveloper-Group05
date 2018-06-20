import { Component } from '@angular/core';
import { Novelas } from './novelas';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	novelas: Novelas[] = [
		{ titulo: "El Caballero Carmelo", autor: "Abraham Valdelomar", fecha: new Date(), descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
		{ titulo: "La Ciudad y los perros", autor: "Vargas Llosa", fecha: new Date(), descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
		{ titulo: "El Perfume", autor: "Patrick Suskind", fecha: new Date(), descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
		{ titulo: "La tia Julia y el escribidor", autor: "Vargas Llosa", fecha: new Date(), descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
		{ titulo: "El Sexto", autor: "José María Arguedas", fecha: new Date(), descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
		{ titulo: "Camino al mundial", autor: "Umberto Jara", fecha: new Date(), descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." }
	]

	campo: string = "autor"
}
