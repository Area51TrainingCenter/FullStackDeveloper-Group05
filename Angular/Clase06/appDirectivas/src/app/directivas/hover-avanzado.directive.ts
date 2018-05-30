import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appHoverAvanzado]'
})
export class HoverAvanzadoDirective {

	@Input("appHoverAvanzado") colorPorDefecto: string = "transparent"
	@Input() colorHover: string = "red"

	@HostBinding("style.backgroundColor") colorFondo: string

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		this.colorFondo = this.colorPorDefecto
	}

	@HostListener("mouseenter") mouseEntra() {
		this.colorFondo = this.colorHover
	}

	@HostListener("mouseleave") mouseSale() {
		this.colorFondo = this.colorPorDefecto
	}



}
