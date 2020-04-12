const mongoose = require("mongoose");
const Todo = require("../models/todo");

exports.todos_get_all = (req, res) => {
    Todo.find({})
        .populate('tasks')
        .exec((err, todos) => {
            if (err || !todos) {
                console.log(err);
            } else {
                res.render('todos/index', {
                    todos: todos
                });
            }
        });
};

exports.todos_create_todo = (req, res) => {
    let title = req.body.title;

    let newTodo = {
        title: title,
    };

    Todo.create(newTodo, (err, newTodo) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Created: \n' + newTodo);
        }
    });
    res.redirect('/todos');
};