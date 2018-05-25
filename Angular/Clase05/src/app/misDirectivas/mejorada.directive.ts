import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appMejorada]'
})
export class MejoradaDirective {

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "skyblue")

		const p = this.renderer.createElement("p")
		const texto = this.renderer.createText("Texto agregado a la p")

		this.renderer.appendChild(p, texto)
		this.renderer.appendChild(this.elementRef.nativeElement, p)
	}

}
