/**
 * Created by Dipen on 10/08/2018.
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/friendrequest.controller');


router.post('/create_friend_request/', controller.create_friend_request);
//
// router.get('/get_aval_planner/:id/:uid', controller.get_aval_planner);
//
// router.delete('/delete_plan/:id', controller.delete_plan);



module.exports = router;
