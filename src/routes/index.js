const express = require('express');
const marcadores = require('./marcadoresRoutes.js');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Rotas OK')
    })

    app.use(
        express.json(),
        marcadores
    )
}

module.exports = routes;