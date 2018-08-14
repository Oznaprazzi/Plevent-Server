const express = require('express');
const router = express.Router();

const controller = require('../controllers/waypoints.controller');

router.get('/', controller.waypoints);

router.get('/:eventId', controller.waypoint_list); 

router.post('/point', controller.add_point);

router.delete('/point/:id', controller.delete_point);

module.exports = router;