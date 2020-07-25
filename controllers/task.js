const logger = require('../middleware/logger');
const Todo = require('../models/todo');
const Task = require('../models/task');

exports.createTask = (req, res) => {
  Todo.findById(req.params.todo_id, (err, todo) => {
    if (err) {
      logger.error(err, 'task.controller.createTask.findById');
      redirect('/todos');
    } else {
      const task = {
        text: req.body.task.text,
        isDone: false
      };
      Task.create(task, (err, task) => {
        if (err) {
          logger.error(err, 'task.controller.createTask.findById.create');
        } else {
          task.save();
          todo.tasks.push(task);
          todo.save();
          res.redirect('/todos');
        }
      });
    }
  });
};

exports.patchTask = (req, res) => {
  Todo.findById(req.params.todo_id, (err, foundTodo) => {
    if (err || !foundTodo) {
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
