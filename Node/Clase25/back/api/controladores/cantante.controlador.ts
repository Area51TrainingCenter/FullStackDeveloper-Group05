import { Request, Response, NextFunction } from "express";
import Cantante from "../modelos/cantante.modelo";

const controlador = {
  async listar(req: Request, res: Response) {
    const cantantes = await Cantante.find()
      .populate("canciones")
      .sort({ apellido: 1, nombre: 1 });

    res.json({
      estado: 200,
      mensaje: "lista de cantantes",
      resultado: cantantes
    });
  },
  async listarPaginado(req: Request, res: Response) {
    const pagina: number = +req.params.pagina;
    const campo: string = req.params.campo;
    const direccion: number = +req.params.direccion;

    const cantidadRegistros: number = await Cantante.find().count();
    const registros = await Cantante.listadoPaginado(pagina, campo, direccion);

    res.json({ cantidadRegistros, registros });
  },
  async insertar(req: Request, res: Response) {
    const cantante = new Cantante(req.body);

    await cantante.save();

    res.json({ estado: 200, mensaje: "Cantante insertado" });
    /*
		const cantante: any = new Cantante()
		cantante.nombre = req.body.nombre
		cantante.apellido = req.body.apellido
		cantante.foto = req.body.foto

		const cantante = new Cantante({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			foto: req.body.foto
		})
		*/
  },

  async eliminar(req: Request, res: Response) {
    await Cantante.findOneAndRemove({ _id: req.params.id });

    res.json({ estado: 200, mensaje: "Se eliminó el cantante" });
  }
};

export { controlador };
