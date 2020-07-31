const logger = require('../middlewares/logger');
const Todo = require('../models/todo');
const Task = require('../models/task');

exports.createTask = async (req, res, next) => {
  await Todo.findById(req.params.todo_id, (err, todo) => {
    if (err) {
      logger.error(err, 'task.controller.createTask.findById');
      next(err);
      redirect('/todos');
    } else {
      const task = {
        text: req.body.task.text,
        isDone: false
      };
      Task.create(task, (err, task) => {
        if (err) {
          next(err);
          logger.error(err, 'task.controller.createTask.findById.create');
        } else {
          task.save();
          logger.debug(`Created task: ${task}`);

          todo.tasks.push(task);
          todo.save();
          logger.debug(`Task: ${task} pushed to: ${todo}`);

          res.redirect('/todos');
          next();
        }
      });
    }
  });
};

exports.patchTask = async (req, res) => {
  await Todo.findById(req.params.todo_id, (err, foundTodo) => {
    if (err || !foundTodo) {
      logger.error(err, 'task.controller.patchTask');
      return res.redirect('/todos');
    }
    if (foundTodo.tasks.includes(req.params.task_id)) {
      Task.findById(req.params.task_id, (err, foundTask) => {
        if (err) {
          res.redirect('/todos');
        } else {
          foundTask.isDone = !foundTask.isDone;
          foundTask.save();
          res.send('Task patched');
        }
      });
    }
  });
};
