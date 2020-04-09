const express = require('express');
const router = express.Router();
const TodoList = require('../models/todoList');

router.get('/', (req, res) => {
    res.render('todos/index');
});

// POST CREATE
router.post('/', (req, res) => {
    let title = req.body.name;
    let todoEntries = req.body.todoEntries;

    let newTodo = {
        title: name,
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

router.get('/:id', (req, res) => {
    res.render('todos/show');
});



module.exports = router;
