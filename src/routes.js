const express = require('express');
const routes = express.Router();

// Primeira rota
routes.get('/', (req, res) => {
    res.send('Hello test');
});

module.exports = routes;