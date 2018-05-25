import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appListener]'
})
export class ListenerDirective {
	@Input() colorPorDefecto: string = "transparent"
	@Input() colorHover: string = "red"

	// this.elementRef.nativeElement.style.backgroundColor
	@HostBinding("style.backgroundColor") colorFondo: string

	@HostListener("mouseenter") mouseEntro() {
		//this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "red")
		this.colorFondo = this.colorHover
	}

	@HostListener("mouseleave") mouseSale() {
		//this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent")
		this.colorFondo = this.colorPorDefecto
	}

	ngOnInit() {
		this.colorFondo = this.colorPorDefecto
	}



	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
