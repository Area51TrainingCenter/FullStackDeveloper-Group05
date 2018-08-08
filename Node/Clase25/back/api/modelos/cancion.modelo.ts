const mongoose = require("mongoose");

const esquema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },

  anno: {
    type: Number,
    required: true
  },

  estado: {
    type: Boolean,
    default: true
  },

  creacion: {
    type: Date,
    default: new Date()
  },

  modificacion: {
    type: Date,
    default: null
  },

  cantante: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Cantante"
    }
  ]
});

const Cancion = mongoose.model("Cancion", esquema);

export { Cancion };
