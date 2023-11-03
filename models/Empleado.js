const mongoose = require('mongoose');

const EmpleadoEsquema = mongoose.Schema({
    idEmpleado: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    aPaterno: {
        type: String,
        require: true
    },
    aMaterno: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('Empleado', EmpleadoEsquema);