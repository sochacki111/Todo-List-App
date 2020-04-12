const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/tasks');
const Todo = require("../models/todo");
const Task = require("../models/task");

router.get('/', (req, res) => {
    res.send('hello ' + req.params.todo_id);
});

// router.post('/', TaskController.tasks_create_task);
router.post('/', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    Todo.findById(req.params.todo_id, (err, todo) => {
        if (err) {
            console.log(err);
            redirect('/todos');
        } else {
            console.log(todo);
            let task = {
                text: req.body.task.text,
                isDone: false
            };
            Task.create(task, (err, task) => {
                if (err) {
                    console.log(err);
                } else {
                    task.save();
                    todo.tasks.push(task);
                    todo.save();
                    res.redirect('/todos');
                }
            });
        }
    });

});

router.patch('/:task_id', TaskController.tasks_patch_task);

module.exports = router;