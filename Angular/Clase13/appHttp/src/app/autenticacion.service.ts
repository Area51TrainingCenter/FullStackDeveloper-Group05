import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { IUsuario } from "./usuario.interface";

@Injectable()
export class AutenticacionService {
	urlApiRest: string = environment.urlApiRest

	constructor(private http: HttpClient) { }

	registrar(usuario: IUsuario): Observable<any> {
		return this.http.post(`${this.urlApiRest}/usuario`, usuario)
	}
}