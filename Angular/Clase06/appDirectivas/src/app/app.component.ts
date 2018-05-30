import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	listaCanciones: { titulo: string, anno: number }[] = []
	stock: number = 0
	nota: number = 5

	procesando: boolean = false

	distritos: Array<string> = ["Pueblo Libre", "Miraflores", "San Isidro"]

	ejecutarTimer() {
		this.procesando = true
		setTimeout(() => this.procesando = false, 3000)
	}

	ngOnInit() {
		this.listaCanciones.push({ titulo: "Canción 01", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 02", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 03", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 04", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 05", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 06", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 07", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 08", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 09", anno: this.generarAnno() })
		this.listaCanciones.push({ titulo: "Canción 10", anno: this.generarAnno() })
	}

	generarAnno(): number {
		return Math.floor(1980 + Math.random() * 30)
	}

	colorLetra(anno: number): string {
		if (anno >= 1980 && anno <= 1990) {
			return "green"
		} else if (anno >= 1991 && anno <= 2000) {
			return "blue"
		} else {
			return "black"
		}
	}
}
