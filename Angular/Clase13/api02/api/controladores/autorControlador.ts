import { NextFunction, Request, Response } from "express";

const mongoose = require("mongoose");
const Autor = mongoose.model("Autor");

const controlador = {
  insertar: async (req: Request, res: Response, next: NextFunction) => {
    const autor = new Autor({
      nombre: req.body.nombre.trim()
    });

    await autor.save();

    res.json({ estado: 201, mensaje: "autor insertado" });
  },
  modificar: async (req: Request, res: Response, next: NextFunction) => {
    const datos = {
      nombre: req.body.nombre.trim()
    };

    await Autor.findOneAndUpdate({ _id: req.params.id }, datos);

    res.json({ estado: 201, mensaje: "autor modificado" });
  },
  eliminar: async (req: Request, res: Response, next: NextFunction) => {
    await Autor.findOneAndRemove({ _id: req.params.id });

    res.json({ estado: 201, mensaje: "autor eliminado" });
  },
  listar: async (req: Request, res: Response, next: NextFunction) => {
    const autores = await Autor.find();

    res.json({
      estado: 200,
      mensaje: "lista de autores",
      resultado: autores
    });
  },
  detallar: async (req: Request, res: Response, next: NextFunction) => {
    const autor = await Autor.findOne({ _id: req.params.id });

    if (autor) {
      res.json({
        estado: 200,
        mensaje: "Autor",
        resultado: autor
      });
    } else {
      res.json({ estado: 200, mensaje: "Autor", resultado: {} });
    }
  }
};

export { controlador };
