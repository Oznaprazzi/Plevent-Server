var express = require('express');
var router = express.Router();

var controller = require('../controllers/gear.controller');

router.get('/:id', controller.gear_list);

router.post('/item', controller.item_post);

router.delete('/item/:id', controller.item_delete);

module.exports = router;