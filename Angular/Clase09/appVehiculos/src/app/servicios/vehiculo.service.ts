import { IVehiculo, tipoVehiculo } from "../models/vehiculo.interface";

export class VehiculoService {
	private vehiculos: IVehiculo[] = [
		{ marca: "Kia", modelo: "Rio", anno: 2012, tipo: tipoVehiculo.tipoSedan },
		{ marca: "Hyundai", modelo: "Santa Fé", anno: 2009, tipo: tipoVehiculo.tipoCamioneta },
		{ marca: "Volvo", modelo: "Xpertise", anno: 2013, tipo: tipoVehiculo.tipoCamion }
	]

	agregar(vehiculo: IVehiculo) {
		vehiculo.tipo = +vehiculo.tipo
		this.vehiculos.push(vehiculo)
	}

	listar() {
		return this.vehiculos.slice(0)
	}

	modificar(ind: number, vehiculo: IVehiculo) {
		//this.vehiculos.splice(ind, 1, vehiculo)
		vehiculo.tipo = +vehiculo.tipo
		this.vehiculos[ind] = vehiculo
	}

	eliminar(ind: number) {
		this.vehiculos.splice(ind, 1)
	}

	detallar(ind: number) {
		const vehiculos: IVehiculo = this.vehiculos.slice(ind)[0]
		return vehiculos
	}


}