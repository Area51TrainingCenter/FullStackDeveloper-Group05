import { Request, Response, NextFunction } from "express";
import { Cancion } from "../modelos/cancion.modelo";

const controlador = {
  async listar(req: Request, res: Response) {
    const cantante = req.params.id;

    const canciones = await Cancion.find({ cantante }).populate("cantante");
    //const canciones = await Cancion.find({cantante, estado: true})

    res.json(canciones);
  },
  async detallar(req: Request, res: Response) {
    const _id = req.params.id;

    const cancion = await Cancion.findOne({ _id });

    res.json(cancion);
  },
  async insertar(req: Request, res: Response) {
    const datos = req.body;

    const cancion = new Cancion(datos);

    await cancion.save();

    res.json({ estado: 200, mensaje: "insertado" });
  },
  async actualizar(req: Request, res: Response) {
    const _id = req.params.id;
    const datos = req.body;

    await Cancion.findOneAndUpdate({ _id }, datos);

    res.json({ estado: 200, mensaje: "actualizado" });
  },
  async eliminar(req: Request, res: Response) {
    const _id = req.params.id;

    await Cancion.findOneAndRemove({ _id });
    // await Cancion.findOneAndUpdate({_id}, {estado: false})
  }
};

export { controlador };
