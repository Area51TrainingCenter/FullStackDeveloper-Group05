import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
	selector: "[miColor]"
})
export class MiColorDirective {
	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		/*this.elementRef.nativeElement.style.backgroundColor = "red"
		this.elementRef.nativeElement.style.color = "white"*/

		this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "red")
		this.renderer.setStyle(this.elementRef.nativeElement, "color", "white")

	}
}