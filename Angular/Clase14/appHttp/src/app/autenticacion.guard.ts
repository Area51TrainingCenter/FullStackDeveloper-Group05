import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
	constructor(private autenticacionService: AutenticacionService) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		return this.autenticacionService.estaAutenticado();
	}
}
