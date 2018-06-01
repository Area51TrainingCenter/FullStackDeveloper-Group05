import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
	selector: 'app-inactivos',
	templateUrl: './inactivos.component.html',
	styleUrls: ['./inactivos.component.css']
})
export class InactivosComponent implements OnInit {
	usuarios: Array<string>
	constructor(private usuarioService: UsuarioService) { }

	ngOnInit() {
		this.usuarios = this.usuarioService.inactivos
	}

	cambiar(ind) {
		this.usuarioService.cambiarAActivo(ind)
	}

}
