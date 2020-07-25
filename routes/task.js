const express = require('express');
const TaskController = require('../controllers/task');

const router = express.Router({
  mergeParams: true
});

router.post('/', TaskController.createTask);

router.patch('/:task_id', TaskController.patchTask);

module.exports = router;