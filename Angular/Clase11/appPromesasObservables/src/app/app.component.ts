import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	propietarios: Array<{}> = [
		{ idPropietario: 1, nombre: "Javier" },
		{ idPropietario: 2, nombre: "Manuel" },
		{ idPropietario: 3, nombre: "Paloma" },
		{ idPropietario: 4, nombre: "Aurora" },
		{ idPropietario: 5, nombre: "Karla" }
	]

	ngOnInit() {
		const promesaVehiculo = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					id: 1,
					marca: "Kia",
					modelo: "Cerato",
					anno: 2010,
					idPropietario: 5
				})
			}, 4000)
		})

		const vehiculoPropietario: any = {}

		promesaVehiculo
			.then((datosVehiculo: any) => {
				vehiculoPropietario.detalle = datosVehiculo

				const promesaPropietario = new Promise((resolve, reject) => {
					setTimeout(() => {
						const propietario = this.propietarios.find((item: any, indice) => {
							return item.idPropietario == datosVehiculo.idPropietario
						})

						resolve(propietario)
					}, 3000)
				})

				return promesaPropietario

				//console.log(datosVehiculo)
			})
			.then(propietario => {
				vehiculoPropietario.propietario = propietario
				console.log(vehiculoPropietario)
			})
			.catch(error => console.log(error))



		const listaPropietariosPromesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				const listado = [
					{ idPropietario: 1, nombre: "Evelyn", idMarca: 1 },
					{ idPropietario: 2, nombre: "Fernanda", idMarca: 1 },
					{ idPropietario: 3, nombre: "Gustavo", idMarca: 2 }
				]

				resolve(listado)
			}, 3500)
		})

		const listaMarcasPromesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				const listado = [
					{ idMarca: 1, marca: "Toyota" },
					{ idMarca: 2, marca: "Hyundai" },
					{ idMarca: 3, marca: "Nissan" }
				]
				//resolve(listado)
				reject("Error de autenticación")
			}, 6000)
		})

		Promise.all([listaPropietariosPromesa, listaMarcasPromesa])
			.then(([propietarios, marcas]) => {
				console.log(propietarios)
				console.log(marcas)
			})
			.catch(error => console.log(error))


	}


}
