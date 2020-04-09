const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

require('dotenv').config();

// REQUIRING ROUTES
const todoRoutes = require('./routes/todos');

mongoose
    .connect(process.env.DATABASEURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('DB CONNECTED!');
    })
    .catch((err) => {
        console.log('ERROR:', err.message);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// ROUTES
app.use('/todos', todoRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(
        `TodoList server has started on port ${process.env.PORT || 3000}!`
    );
});
