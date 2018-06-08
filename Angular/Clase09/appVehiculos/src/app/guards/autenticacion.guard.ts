import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


export class AutenticacionGuards implements CanActivate, CanActivateChild {

	constructor(private ruteador: Router) { }

	canActivate(rutaActivaEstado: ActivatedRouteSnapshot, historialEstado: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		//this.ruteador.navigate()
		return false
	}

	canActivateChild() {
		return true
	}
}