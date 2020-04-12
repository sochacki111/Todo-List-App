const mongoose = require("mongoose");
const Todo = require("../models/todo");

exports.todos_get_all = (req, res) => {
    console.log('todos controller');
    Todo.find({}, (err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.render('todos/index', { todos: todos });
        }
    });
};

exports.todos_create_todo = (req, res) => {
    let title = req.body.title;

    let newTodo = {
        title: title,
    };

    Todo.create(newTodo, (err, todoList) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Created: \n' + todoList);
        }
    });
    res.redirect('/todos');
};