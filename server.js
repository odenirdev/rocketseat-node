const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando app
const app = express();

app.use(express.json());
app.use(cors());
// Iniciando DB
mongoose.connect('mongodb+srv://root:root@cluster0-fkhp6.mongodb.net/nodeAPI?retryWrites=true&w=majority', { useNewUrlParser: true });

requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3001);