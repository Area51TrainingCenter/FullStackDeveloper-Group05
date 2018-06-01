import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
	selector: 'app-activos',
	templateUrl: './activos.component.html',
	styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {
	usuarios: Array<string>
	constructor(private usuarioService: UsuarioService) { }

	ngOnInit() {
		this.usuarios = this.usuarioService.activos
	}

	cambiar(ind) {
		this.usuarioService.cambiarAInactivo(ind)
	}

}
