const express = require('express');
const MarcadoresController = require('../controllers/marcadoresController.js');

const router = express.Router();

router
    .get('/marcadores', MarcadoresController.pegaTodosOsMarcadores)
    .get('/marcadores/:id', MarcadoresController.pegaUmMarcador)
    .post('/marcadores', MarcadoresController.adicionaMarcador)
    .put('/marcadores/:id', MarcadoresController.atualizaMarcador)
    .delete('/marcadores/:id', MarcadoresController.deletaMarcador)

module.exports = router;