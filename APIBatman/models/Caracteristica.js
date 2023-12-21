const { model, Schema } = require("mongoose");
const CaracteristicaSchema = new Schema({
    jugabilidad: {
        type: String,
        require: true
    },
    graficos: {
        type: String,
        require: true
    },
    bandaSonora: {
        type: String,
        require: true
    }
})
module.exports = model('Caracteristica', CaracteristicaSchema)