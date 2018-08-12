/**
 * Created by Dipen on 10/08/2018.
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/availability.controller');

router.post('/create_planner', controller.create_planner);
router.get('/get_aval_planner/:id', controller.get_aval_planner);


module.exports = router;

