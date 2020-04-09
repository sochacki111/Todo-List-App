const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('todos/index');
});

module.exports = router;