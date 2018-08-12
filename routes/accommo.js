const express = require('express');
const router = express.Router();

const controller = require('../controllers/accommo.controller');

router.get('/get_accommo/:id', controller.accommo_list);

router.post('/add_accommo', controller.accommo_post);

router.post('/edit_accommo/:id', controller.accommo_edit);

router.delete('/delete_accommo/:id', controller.accommo_delete);

module.exports = router;
