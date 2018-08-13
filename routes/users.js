const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');

router.get('/', controller.get_all_users);

router.get('/get_user/:id', controller.get_user);

router.post('/user/:id', controller.user_edit);

router.post('/edit_username/:id', controller.user_edit_username);

router.post('/change_password/:id', controller.user_change_password);


module.exports = router;
