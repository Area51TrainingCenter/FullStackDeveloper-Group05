import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { VehiculoService } from "../servicios/vehiculo.service";

@Injectable()
export class VehiculosResolve implements Resolve<any> {
	constructor(private vehiculosService: VehiculoService) { }

	resolve(rutaActiva: ActivatedRouteSnapshot, historialEstado: RouterStateSnapshot): Observable<any> | Promise<any> | any {

		//setTimeout(() => {
		return this.vehiculosService.listar()
		//}, 5000)




	}

}