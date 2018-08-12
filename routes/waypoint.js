const express = require('express');
const router = express.Router();

const controller = require('../controllers/waypoint.controller');

router.get('/', controller.index);

router.post('/address', controller.get_address);

module.exports = router;