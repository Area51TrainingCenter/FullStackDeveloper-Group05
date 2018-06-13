export enum tipoVehiculo {
	tipoSedan,
	tipoCamioneta,
	tipoCamion
}

export interface IVehiculo {
	marca?: string
	modelo?: string
	anno?: number
	tipo?: tipoVehiculo
}