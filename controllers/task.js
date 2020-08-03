const logger = require('../middlewares/logger');
const Todo = require('../models/todo');
const Task = require('../models/task');

exports.createTask = async (req, res, next) => {
  try {
    const foundTodo = await Todo.findById(req.params.todo_id);

    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    const newTask = {
      text: req.body.task.text,
      isDone: false
    };

    const createdTask = await Task.create(newTask);
    createdTask.save();
    logger.debug(`Created task: ${createdTask}`);

    foundTodo.tasks.push(createdTask);
    foundTodo.save();
    logger.debug(`Task: ${createdTask} pushed to: ${foundTodo}`);

    next();
  } catch (err) {
    logger.error(err, 'task.controller.createTask.findById');

    next(err);
  } finally {
    res.redirect('/todos');
  }
};

exports.patchTask = async (req, res, next) => {
  try {
    const foundTodo = await Todo.findById(req.params.todo_id);
    if (foundTodo && foundTodo.tasks.includes(req.params.task_id)) {
      const foundTask = await Task.findById(req.params.task_id);
      foundTask.isDone = !foundTask.isDone;
      foundTask.save();
      res.send('Task patched');
      logger.debug(`Task: ${foundTodo} patched`);

      next();
    }
  } catch (err) {
    logger.error(err, 'task.controller.patchTask');
    res.redirect('/todos');

    next(err);
  }
};
