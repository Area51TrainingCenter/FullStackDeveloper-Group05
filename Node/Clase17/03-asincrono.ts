import * as fs from "fs";

fs.readFile("./lectura.txt", "utf-8", (err, data) => {
	if (err) { console.log(err) }
	else {
		console.log(data)
		fs.writeFile("./escritura.txt", data, function (error) {
			console.log(error)
		})
	}
})

/*const contenido = fs.readFileSync("./lectura.txt", {
	encoding: "utf8"
})

fs.writeFileSync("./respuesta.txt", contenido)*/

//console.log(contenido)