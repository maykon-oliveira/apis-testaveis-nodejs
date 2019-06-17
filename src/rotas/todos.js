const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/todo-controller');

router.get('/', TodoController.findAll);
router.post('/',TodoController.post);
router.delete('/:id',TodoController.delete);

module.exports = router;