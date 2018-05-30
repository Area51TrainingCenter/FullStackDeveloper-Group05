import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[appProcesando]'
})
export class ProcesandoDirective {

	@Input() appProcesando: boolean
	textoOriginal: string

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnChanges(cambios: SimpleChanges) {
		const estado: boolean = cambios.appProcesando.currentValue
		this.renderer.setProperty(this.elementRef.nativeElement, "disabled", estado)

		if (estado) {
			this.textoOriginal = this.elementRef.nativeElement.textContent
			this.elementRef.nativeElement.textContent = "Procesando..."
		} else {
			if (this.textoOriginal) this.elementRef.nativeElement.textContent = this.textoOriginal
		}
	}

}
