export interface Ihistorial {
	persona?: string
	movimiento?: string
}

export interface Iequipo {
	nombre?: string
	estado?: string
	historial?: Array<Ihistorial>
}
