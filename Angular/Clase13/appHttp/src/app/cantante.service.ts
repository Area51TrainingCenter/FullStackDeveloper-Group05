import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { environment } from "../environments/environment";
import { ICantante } from "./cantante.interface";
import { Errores } from "./errores";

@Injectable()
export class CantanteService {
	urlApiRest: string = environment.urlApiRest
	errores: Errores = new Errores()

	constructor(private http: HttpClient) { }

	listar(): Observable<ICantante[]> {
		const accessToken: string = localStorage.getItem("accessToken")
		const headers: HttpHeaders = new HttpHeaders({
			"authorization": `Bearer ${accessToken}`
		})

		return this.http.get<ICantante[]>(`${this.urlApiRest}/cantante`, { headers })
			.pipe(
				retry(3),
				catchError(this.errores.manejador)
			)
	}

}