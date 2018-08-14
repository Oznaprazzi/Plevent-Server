const express = require('express');
const router = express.Router();

const controller = require('../controllers/trans.controller');

router.get('/get_trans/:id', controller.trans_list);

router.post('/add_trans', controller.trans_post);

router.post('/edit_trans/:id', controller.trans_edit);

router.delete('/delete_trans/:id', controller.trans_delete);

module.exports = router;
