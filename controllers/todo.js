const Todo = require('../models/todo');
const logger = require('../middlewares/logger');

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

exports.create = async (req, res, next) => {
  const newTodo = {
    title: req.body.title
  };

  try {
    const todo = await Todo.create(newTodo);
    logger.debug(`Todo created: ${todo}`);
  } catch (err) {
    logger.error(err, 'todo.controller.create');
  } finally {
    res.redirect('/todos');
  }
};