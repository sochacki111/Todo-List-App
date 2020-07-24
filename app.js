const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DATABASEURL = process.env.DATABASEURL || 'mongodb://localhost:27017/todo_list';

// REQUIRING ROUTES
const taskRoutes = require('./routes/tasks');
const todoRoutes = require('./routes/todos');
const indexRoutes = require('./routes/index');

mongoose.connect(DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB CONNECTED!');
}).catch((err) => {
  console.log('ERROR:', err.message);
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// ROUTES
app.use('/', indexRoutes);
app.use('/todos', todoRoutes);
app.use('/todos/:todo_id/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(
    `TodoList server has started on port ${PORT}!`
  );
});

// TODO Add eslint
// TODO Add Typescript
// TODO Add pino for logging
// TODO Add react