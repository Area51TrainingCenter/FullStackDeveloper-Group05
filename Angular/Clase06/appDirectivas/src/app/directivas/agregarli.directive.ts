import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appAgregarli]'
})
export class AgregarliDirective {

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	@HostListener("click") agregar() {
		const li = this.renderer.createElement("li")
		const texto = this.renderer.createText("Nuevo elemento")

		this.renderer.appendChild(li, texto)
		this.renderer.appendChild(this.elementRef.nativeElement, li)
	}

}
