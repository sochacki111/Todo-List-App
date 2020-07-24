const express = require('express');

const router = express.Router({
  mergeParams: true
});
const TaskController = require('../controllers/tasks');

router.post('/', TaskController.tasks_create_task);

router.patch('/:task_id', TaskController.tasks_patch_task);

module.exports = router;