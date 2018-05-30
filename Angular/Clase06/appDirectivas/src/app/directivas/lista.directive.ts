import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appLista]'
})
export class ListaDirective implements OnInit {

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		const option = this.renderer.createElement("option")
		const texto = this.renderer.createText("Elemento 01 del Select")

		this.renderer.appendChild(option, texto)
		// <option>Elemento 01 del Select</option>
		this.renderer.appendChild(this.elementRef.nativeElement, option)
	}

}
