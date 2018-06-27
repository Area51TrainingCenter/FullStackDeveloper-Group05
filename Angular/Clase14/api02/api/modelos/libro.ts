const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require("mongoose-mongodb-errors");

import moment = require("moment");

const esquema = new mongoose.Schema({
  libro: {
    type: String,
    trim: true,
    required: true
  },

  autor: {
    type: mongoose.Schema.ObjectId,
    ref: "Autor",
    required: true
  },

  creacion: {
    type: Number,
    default: moment().unix()
  }
});

function autopoblar(next) {
  this.populate("autor");
  next();
}

esquema.pre("find", autopoblar);
esquema.pre("findOne", autopoblar);

esquema.plugin(mongodbErrorHandler);

const Libro = mongoose.model("Libro", esquema);

export default Libro;
