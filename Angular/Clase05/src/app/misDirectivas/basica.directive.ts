import { Directive, ElementRef } from "@angular/core";

@Directive({
	selector: "[basica]"
})
export class BasicaDirective {

	constructor(private elementRef: ElementRef) {
	}

	ngOnInit() {
		this.elementRef.nativeElement.style.backgroundColor = "yellow"
	}
}