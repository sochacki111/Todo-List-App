const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

// REQUIRING ROUTES
const todoRoutes = require('./routes/todos');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// ROUTES
app.use('/', todoRoutes);

app.listen(process.env.PORT, () => {
    console.log(`TodoList server has started on port ${process.env.PORT}!`);
});
