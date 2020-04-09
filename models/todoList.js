const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    title: String,
    todoEntries: [
        {
            type: String
        }
    ],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        username: String,
    },
});

const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;
