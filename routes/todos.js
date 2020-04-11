const express = require('express');
const router = express.Router();
const TodoList = require('../models/todoList');

router.get('/', (req, res) => {
    TodoList.find({}, (err, todoLists) => {
        if (err) {
            console.log(err);
        } else {
            res.render('todos/index', { todoLists: todoLists });
        }
    });
});

// POST CREATE
router.post('/', (req, res) => {
    let title = req.body.title;

    let newTodo = {
        title: title,
    };

    TodoList.create(newTodo, (err, todoList) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Created: \n' + todoList);
        }
    });

    res.redirect('/todos');
});

router.post('/addTask', (req, res) => {
    TodoList.findById(req.body.todo_id, (err, todoList) => {
        if (err) {
            console.log(err);
            redirect('/todos');
        } else {

            todoList.todoEntries.push(req.body.todoEntry);
            todoList.save();
            res.redirect('/todos');
        }
    });

});

router.get('/:id', (req, res) => {
    res.render('todos/show');
});

module.exports = router;
