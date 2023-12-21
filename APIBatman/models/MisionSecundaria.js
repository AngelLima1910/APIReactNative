const {model, Schema} = require("mongoose");
const MisionSecundariaSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    dificultad: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    }
})
module.exports = model('MisionSecundaria', MisionSecundariaSchema)