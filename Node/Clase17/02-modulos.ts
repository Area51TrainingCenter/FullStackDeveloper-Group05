import { Reloj } from "./reloj";

const reloj = new Reloj()
reloj.iniciar()
reloj.on("hora", (datos) => {
	console.log(datos)
})