const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando app
const app = express();

// Iniciando DB
mongoose.connect('mongodb+srv://root:root@cluster0-fkhp6.mongodb.net/nodeAPI?retryWrites=true&w=majority', { useNewUrlParser: true });

requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3001);