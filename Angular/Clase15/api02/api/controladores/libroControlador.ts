import { NextFunction, Request, Response } from "express";

const mongoose = require("mongoose");
const Libro = mongoose.model("Libro");

const controlador = {
  insertar: async (req: Request, res: Response, next: NextFunction) => {
    const autor = new Libro({
      autor: req.body.autor.trim(),
      libro: req.body.libro.trim()
    });

    await autor.save();

    res.json({ estado: 201, mensaje: "libro insertado" });
  },
  modificar: async (req: Request, res: Response, next: NextFunction) => {
    const datos = {
      autor: req.body.autor.trim(),
      libro: req.body.libro.trim()
    };

    await Libro.findOneAndUpdate({ _id: req.params.id }, datos);

    res.json({ estado: 201, mensaje: "libro modificado" });
  },
  eliminar: async (req: Request, res: Response, next: NextFunction) => {
    await Libro.findOneAndRemove({ _id: req.params.id });

    res.json({ estado: 201, mensaje: "libro eliminado" });
  },
  listar: async (req: Request, res: Response, next: NextFunction) => {
    const libros = await Libro.find();

    res.json({
      estado: 200,
      mensaje: "lista de libros",
      resultado: libros
    });
  },
  detallar: async (req: Request, res: Response, next: NextFunction) => {
    const libro = await Libro.findOne({ _id: req.params.id });

    if (libro) {
      res.json({
        estado: 200,
        mensaje: "Libro",
        resultado: libro
      });
    } else {
      res.json({ estado: 200, mensaje: "Libro", resultado: {} });
    }
  }
};

export { controlador };
