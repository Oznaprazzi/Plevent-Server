/**
 * Created by Dipen on 10/08/2018.
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/friendslist.controller');


router.post('/add_friend', controller.add_friend);

router.get('/get_all_friend/:uid', controller.get_all_friend);

router.delete('/unfriend/:id/:rid', controller.unfriend);


module.exports = router;
