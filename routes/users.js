const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');

router.get('/', controller.get_all_users);


router.get('/get_user/:id', controller.get_user);




module.exports = router;
