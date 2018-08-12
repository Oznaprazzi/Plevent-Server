const express = require('express');
const router = express.Router();

const controller = require('../controllers/grocery.controller');

router.get('/:id', controller.grocery_list);

router.post('/item', controller.item_post);

router.delete('/item/:id', controller.item_delete);

module.exports = router;