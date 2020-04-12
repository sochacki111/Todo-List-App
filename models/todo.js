const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
});

module.exports = mongoose.model('Todo', todoSchema);
