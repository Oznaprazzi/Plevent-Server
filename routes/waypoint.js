const express = require('express');
const router = express.Router();

const controller = require('../controllers/waypoint.controller');

router.get('/', controller.index);

router.post('/address', controller.address_get);

router.post('/coord', controller.coord_get)