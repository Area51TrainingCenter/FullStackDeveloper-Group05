import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appHover]'
})
export class HoverDirective {

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	@HostListener("mouseenter") mouseEntra() {
		this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "red")
		this.renderer.setStyle(this.elementRef.nativeElement, "color", "white")
	}

	@HostListener("mouseleave") mouseSale() {
		this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent")
		this.renderer.setStyle(this.elementRef.nativeElement, "color", "black")
	}

	@HostListener("click") haceClic() {
		alert("Hizo clic")
	}

}
