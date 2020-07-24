const Todo = require('../models/todo');

exports.todos_get_all = (req, res) => {
  Todo.find({})
    .populate('tasks')
    .exec((err, todos) => {
      if (err || !todos) {
        console.log(err);
      } else {
        res.render('todos/index', {
          todos
        });
      }
    });
};

exports.todos_create_todo = (req, res) => {
  const newTodo = {
    title: req.body.title
  };

  Todo.create(newTodo, (err, newTodo) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Created: \n${newTodo}`);
    }
  });
  res.redirect('/todos');
};
