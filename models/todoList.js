const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    title: String,
    todoEntries: [
        {
            type: String
        }
    ]
});

const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;
