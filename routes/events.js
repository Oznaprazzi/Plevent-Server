/**
 * Created by Dipen on 3/08/2018.
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/events.controller');

router.get('/event/:id', controller.get_all_events);

router.post('/add_event', controller.add_event);

router.post('/edit_event', controller.edit_event);

router.delete('/delete_event/:id', controller.delete_event);

// router.delete('/add_event', controller.events);
module.exports = router;

