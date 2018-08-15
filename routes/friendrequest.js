/**
 * Created by Dipen on 10/08/2018.
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/friendrequest.controller');


router.post('/create_friend_request/', controller.create_friend_request);
//
router.get('/get_friend_request/:uid', controller.get_friend_request);

router.get('/get_all_friend_request/:uid', controller.get_all_friend_request);
//
// router.delete('/delete_plan/:id', controller.delete_plan);



module.exports = router;
