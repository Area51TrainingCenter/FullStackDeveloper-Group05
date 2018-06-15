import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, Observer, Subject } from "rxjs";

export class DataService implements Resolve<any> {
	dataVehiculos: Array<{}>
	dataMarcas: Array<{}>

	subject: Subject<Array<{}>> = new Subject<Array<{}>>()

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {

		const promesaVehiculos = new Promise((resolve, reject) => {
			this.listadoVehiculos()
				.subscribe(
					(vehiculos: Array<{}>) => {
						this.dataVehiculos = vehiculos
						resolve()
					}
				)
		})

		const promesaMarcas = new Promise((resolve, reject) => {
			this.listadoMarcas()
				.subscribe(
					(marcas: Array<{}>) => {
						this.dataMarcas = marcas
						resolve()
					}
				)
		})

		return Promise.all([promesaVehiculos, promesaMarcas])
	}

	listadoVehiculos(): Observable<Array<{}>> {

		const observable: Observable<Array<{}>> = Observable.create(
			(observador: Observer<Array<{}>>) => {
				setTimeout(() => {
					observador.next([
						{ idVehiculo: 1, uso: "ministerio", tipo: "camioneta", idMarca: 1 },
						{ idVehiculo: 2, uso: "seguridad", tipo: "sedan", idMarca: 3 }
					])
				}, 3000)
			}
		)

		return observable
	}

	listadoMarcas(): Observable<Array<{}>> {

		const observable: Observable<Array<{}>> = Observable.create(
			(observador: Observer<Array<{}>>) => {
				setTimeout(() => {
					observador.next([
						{ idMarca: 1, marca: "Toyota" },
						{ idMarca: 2, marca: "Kia" },
						{ idMarca: 3, marca: "Hyundai" }
					])
				}, 2000)
			}
		)

		return observable
	}

	agregarVehiculo(vehiculo: {}) {
		this.dataVehiculos.push(vehiculo)
		this.subject.next(this.dataVehiculos)
	}


}