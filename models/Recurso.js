const mongoose = require('mongoose');

const RecursoSchema = mongoose.Schema({
    numSerie: {
        type: String,
    },
    recurso: {
        type: String,
    },
    marca: {
        type: String,
    },
    modelo: {
        type: String,
    },
    estatus: {
        type: String,
        require: false
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },

});

module.exports = mongoose.model('Recurso', RecursoSchema);