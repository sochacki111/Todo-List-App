const Todo = require('../models/todo');
const logger = require('../middlewares/logger');

exports.findAll = async (req, res, next) => {
  try {
    const foundTodos = await Todo.find({})
      .populate('tasks')
      .exec();
    logger.debug(`Found todos: ${foundTodos}`);
    res.render('todos/index', { foundTodos });

    next();
  } catch (err) {
    logger.error(err, 'todo.controller.findAll');

    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newTodo = {
      title: req.body.title
    };

    const createdTodo = await Todo.create(newTodo);
    logger.debug(`Todo created: ${createdTodo}`);

    next();
  } catch (err) {
    logger.error(err, 'todo.controller.create');

    next(err);
  } finally {
    res.redirect('/todos');
  }
};