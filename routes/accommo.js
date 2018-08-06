const express = require('express');
const router = express.Router();

const controller = require('../controllers/accommo.controller');

router.get('/getAccommo', controller.accommo_list);

router.post('/addAccommo', controller.accommo_post);

router.delete('/deleteAccommo/:id', controller.accommo_delete);

module.exports = router;
