const express = require('express');
const router = express.Router();

const controller = require('../controllers/waypoint.controller');

router.get('/:eventId', controller.waypoint_list); 

router.post('/point', controler.add_point);

router.delete('/point/:id', controller.delete_point);

module.exports = router;