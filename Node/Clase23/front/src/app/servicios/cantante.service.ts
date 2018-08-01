import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICantante } from '../modelos/cantante.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CantanteService {

	constructor(private http: HttpClient) { }

	insertar(cantante: ICantante): Observable<any> {
		const fd = new FormData()
		fd.append("nombre", cantante.nombre)
		fd.append("apellido", cantante.apellido)
		fd.append("foto", cantante.foto)

		return this.http.post(`${environment.apiRest}/app/cantante`, fd)
	}
}
