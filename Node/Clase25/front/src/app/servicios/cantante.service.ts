import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICantante } from '../modelos/cantante.model';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators'
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CantanteService {

	constructor(private http: HttpClient) { }

	insertar(fd: FormData): Observable<any> {
		return this.http.post(`${environment.apiRest}/app/cantante`, fd)
	}

	listar(): Observable<ICantante[]> {
		return this.http.get<ICantante[]>(`${environment.apiRest}/app/cantante`)
			.pipe(
				pluck("resultado")
			)
	}

	listadoPaginado(numeroPagina: number, campo: string, direccion: number): Observable<any> {
		return this.http.get(`${environment.apiRest}/app/cantante/${numeroPagina}/${campo}/${direccion}`)
	}

	eliminar(id: string): Observable<any> {
		return this.http.delete(`${environment.apiRest}/app/cantante/${id}`)
	}
}
