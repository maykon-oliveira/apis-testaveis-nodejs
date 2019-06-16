const express = require('express');
const app = express();

// Rotas
const indexRouter = require('./rotas/index');
const todosRouter = require('./rotas/todos');

app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

module.exports = app;