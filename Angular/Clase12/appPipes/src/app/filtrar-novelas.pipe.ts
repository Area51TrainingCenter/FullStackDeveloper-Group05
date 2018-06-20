import { Pipe, PipeTransform } from '@angular/core';
import { Novelas } from './novelas';

@Pipe({
	name: 'filtrarNovelas'
})
export class FiltrarNovelasPipe implements PipeTransform {

	transform(value: Novelas[], texto: string, campo: string, ordenar: string): any {
		if (!texto || !campo) return value

		return value
			.filter(novela => novela[campo].toLowerCase().indexOf(texto.toLowerCase()) > -1)
		//.sort((a, b) => return (a[ordenar] > b[ordenar]))
	}

}
