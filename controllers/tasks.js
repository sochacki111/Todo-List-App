const mongoose = require("mongoose");
const Todo = require("../models/todo");
const Task = require("../models/task");

exports.tasks_create_task = (req, res) => {
    Todo.findById(req.body.todo_id, (err, todoList) => {
        if (err) {
            console.log(err);
            redirect('/todos');
        } else {
            let entry = { text: req.body.text, isDone: false };
            todoList.todoEntries.push(entry);
            todoList.save();
            res.redirect('/todos');
        }
    });

};

exports.tasks_patch_task = (req, res) => {
    console.log('patch hit');
    res.redirect('/todos');
};