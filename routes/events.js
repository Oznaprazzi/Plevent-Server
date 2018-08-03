/**
 * Created by Dipen on 3/08/2018.
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/events.controller');


// router.get('/', controller.get_events);

router.post('/add_event', controller.add_event);

// router.delete('/add_event', controller.events);

module.exports = router;

