const express = require('express');
const TodoController = require('../controllers/todo');

const router = express.Router();

router.get('/', TodoController.findAll);
router.post('/', TodoController.create);

module.exports = router;
