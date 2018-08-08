const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const esquema = new mongoose.Schema(
  {
    nombre: String,
    apellido: String,
    foto: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

esquema.statics.listadoPaginado = function(
  pagina: number,
  campo: string,
  direccion: number
) {
  const skip: number = pagina * 15;
  const limit: number = 15;

  const ordenacion = {};
  ordenacion[campo] = direccion;

  console.log(ordenacion);

  return this.aggregate([
    {
      $lookup: {
        from: "cancions",
        localField: "_id",
        foreignField: "cantante",
        as: "aliasCancion"
      }
    },
    { $sort: ordenacion },
    { $skip: skip },
    { $limit: limit }
  ]);
};

esquema.virtual("canciones", {
  ref: "Cancion",
  localField: "_id",
  foreignField: "cantante"
});

const Cantante = mongoose.model("Cantante", esquema);

export default Cantante;
