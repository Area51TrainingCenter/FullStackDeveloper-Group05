import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDistritos]'
})
export class DistritosDirective {

	@Input() appDistritos: Array<string>

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		const listaDistritos: Array<string> = this.appDistritos.sort((a, b) => {
			if (a > b) return 1
			else return 0
		})

		listaDistritos.forEach(distrito => {
			const option = this.renderer.createElement("option")
			const texto = this.renderer.createText(distrito)
			this.renderer.appendChild(option, texto)
			this.renderer.appendChild(this.elementRef.nativeElement, option)
		})
	}



}
