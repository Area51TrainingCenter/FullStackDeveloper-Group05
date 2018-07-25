import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  correo: string
  contrasena: string

  constructor(private http: HttpClient) { }

  login() {
    this.http.post("http://localhost:4000/usuario/login", { correo: this.correo, contrasena: this.contrasena })
      .subscribe(
        (data: any) => {
          console.log(data)
          localStorage.setItem("usuarioLogueado", JSON.stringify(data))
        },
        error => console.log(error)
      )
  }

}
