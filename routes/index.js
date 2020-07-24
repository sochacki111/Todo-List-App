const express = require('express');

const router = express.Router();
const IndexController = require('../controllers/index');

router.get('/', IndexController.landing_show);

module.exports = router;