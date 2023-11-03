const express = require('express');
const router = express.Router();

const recursoController = require('../controllers/recursoController');


router.post('/', recursoController.crearRecurso);
router.get('/', recursoController.obtenerRecursos);
router.put(('/:id'), recursoController.actualizarRecurso);
router.get(('/:id'), recursoController.obtenerRecursoID);
router.delete(('/:id'), recursoController.eliminarRecurso);

//router.post(('/'), () => {
    //console.log('Creando recurso...');
//})

module.exports = router;

