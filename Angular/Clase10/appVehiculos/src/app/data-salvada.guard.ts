import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

interface CanDeactivateComponente {
	verificarDataNoSalvada: () => boolean
	grabar: () => void
}

@Injectable({
	providedIn: 'root'
})
export class DataSalvadaGuard implements CanDeactivate<CanDeactivateComponente> {

	canDeactivate(componente: CanDeactivateComponente): boolean {
		if (componente.verificarDataNoSalvada()) {
			if (confirm("Hay data no salvada, ¿quieres salvarla?")) {
				componente.grabar()
				return true
			} else {
				return true
			}
		}
		return true
	}

}
