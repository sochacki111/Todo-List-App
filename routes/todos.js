const express = require('express');

const router = express.Router();
const TodoController = require('../controllers/todos');

router.get('/', TodoController.todos_get_all);

router.post('/', TodoController.todos_create_todo);

module.exports = router;
