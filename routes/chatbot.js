const express = require('express');
const router = express.Router();

var controller = require('../controllers/chatbot.controller');

router.get('/', controller.index);

router.post('/', controller.get_reply);

module.exports = router;