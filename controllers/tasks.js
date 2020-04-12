const mongoose = require("mongoose");
const Todo = require("../models/todo");
const Task = require("../models/task");

// exports.tasks_create_task = (req, res) => {
//     Todo.findById(req.params.todo_id, (err, todo) => {
//         if (err) {
//             console.log(err);
//             redirect('/todos');
//         } else {
//             let task = {
//                 text: req.body.task.text,
//                 isDone: false
//             };
//             console.log(req.originalUrl);
//             Task.create(task, (err, task) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     task.save();
//                     todo.tasks.push(task);
//                     todo.save();
//                     res.redirect('/todos');
//                 }
//             });
//         }
//     });

// };

exports.tasks_patch_task = (req, res) => {
    console.log('patch hit');
    res.redirect('/todos');
};