import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class Errores {
	manejador(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.log("Ocurrió un error", error.error)
		} else {
			console.log("Estado", error.status)
			console.log("Detalle", error.error.mensaje)
		}

		return throwError("Ocurrió un error")
	}
}