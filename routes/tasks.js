const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/tasks');

router.post('/', TaskController.tasks_create_task);

router.patch('/', TaskController.tasks_patch_task);

module.exports = router;