import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable()
export class AutenticacionGuard implements CanActivate, CanLoad {

	constructor(private autenticacionService: AutenticacionService) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		return this.autenticacionService.estaAutenticado();
	}

	canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
		return this.autenticacionService.estaAutenticado();
	}


}
