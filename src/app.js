const express = require('express');
const app = express();

// Rotas
const indexRouter = require('./rotas/index');

app.use(express.json());

app.use(indexRouter);

module.exports = app;