const Todo = require('../models/todo');
const logger = require('../middleware/logger');

exports.findAll = (req, res) => {
  Todo.find({})
    .populate('tasks')
    .exec((err, todos) => {
      if (err || !todos) {
        logger.error(err, 'todo.controller.findAll');
      } else {
        res.render('todos/index', {
          todos
        });
      }
    });
};

exports.create = (req, res) => {
  const newTodo = {
    title: req.body.title
  };

  Todo.create(newTodo, (err, newTodo) => {
    if (err) {
      logger.error(err, 'todo.controller.create');
    } else {
      logger.debug(`Todo created: ${newTodo}`);
    }
  });
  res.redirect('/todos');
};