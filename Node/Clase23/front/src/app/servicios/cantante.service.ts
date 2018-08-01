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

	insertar(fd: FormData): Observable<any> {


		return this.http.post(`${environment.apiRest}/app/cantante`, fd)
	}
}
