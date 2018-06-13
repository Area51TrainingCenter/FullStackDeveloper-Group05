import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {


	ngOnInit() {
		/*const promesaCliente = new Promise((resolve, reject) => {
			setTimeout(() => {
				//resolve()
				reject()
			}, 5000)
		})

		promesaCliente.then(() => {
			console.log("El cliente cumplió su promesa")
		})

		promesaCliente.catch(() => {
			console.log("El cliente no cumplió con su promesa")
		})*/

		/*const detalleVehiculo: Promise<any> = new Promise((resolve, reject) => {
			// Llamada a un API Rest
			setTimeout(() => {
				const aleatoria = Math.random() * 10
				if (aleatoria > 5) {
					resolve({ estado: 200, mensaje: "detalle vehículo", resultado: [{ marca: "Kia" }] })
				} else {
					reject({ estado: 409, mensaje: "usuario no autorizado", resultado: [] })
				}
			}, 5000)
		})*/

		const detalleVehiculo: Promise<any> = new Promise((resolve, reject) => {
			// Llamada a un API Rest
			setTimeout(() => {
				resolve({ estado: 200, mensaje: "detalle vehículo", resultado: [{ marca: "Kia" }] })
			}, 5000)
		})

		/*detalleVehiculo.then((data) => console.log(data))
		detalleVehiculo.catch((error) => console.log(error))*/

		detalleVehiculo
			.then((data) => {
				console.log(data)
				const propietario = new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve({ estado: 200, mensaje: "propietario obtenido", resultado: ["Sergio"] })
					}, 3000)
				})

				return propietario
			})
			.then((propietarioNombre) => console.log(propietarioNombre))
			.catch((error) => console.log(error))
	}

}
