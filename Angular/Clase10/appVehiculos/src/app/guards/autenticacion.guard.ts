import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


export class AutenticacionGuards implements CanActivate, CanActivateChild {

	constructor() { }

	canActivate(rutaActivaEstado: ActivatedRouteSnapshot, historialEstado: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		//this.ruteador.navigate()
		return true
	}

	canActivateChild() {
		return true
	}
}