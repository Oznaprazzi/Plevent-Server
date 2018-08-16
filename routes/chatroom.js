/**
 * Created by Casey on 16/08/2018.
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/chatroom.controller');

router.get('/get_chatroom/:id', controller.get_chatroom);

router.post('/add_chatroom', controller.add_chatroom);

module.exports = router;

