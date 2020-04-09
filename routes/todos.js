const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Todos index page');
});

router.get('/:id', (req, res) => {
    res.render('todos/show');
});

module.exports = router;