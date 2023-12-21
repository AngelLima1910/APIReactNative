const {model, Schema} = require("mongoose");
const PersonajeSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    edad: {
        type: Number,
        require: true,
    },
    habilidades: {
        type: Array,
        require: true,
    },
    gadgets: {
        type: Array,
        require: true,
    }
})
module.exports = model("Personaje", PersonajeSchema)