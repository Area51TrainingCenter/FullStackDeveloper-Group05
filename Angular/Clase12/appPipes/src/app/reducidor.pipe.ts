import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "reducidor"
})
export class ReducidorPipe implements PipeTransform {
	transform(valor: any, limite: number) {
		if (valor.length < limite) return valor

		return valor.substr(0, limite) + "... ver más"
	}
}