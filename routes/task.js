const express = require('express');
const TaskController = require('../controllers/task');
const errorHandler = require('../middlewares/errors');

const router = express.Router({
  mergeParams: true
});

router.post('/', errorHandler.catchAsync(TaskController.createTask));

router.patch('/:task_id', errorHandler.catchAsync(TaskController.patchTask));

module.exports = router;