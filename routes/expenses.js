const express = require('express');
const router = express.Router();

const controller = require('../controllers/expense.controller');

router.get('/:id', controller.expense_list);

router.post('/expense', controller.expense_post);

router.delete('/expense/:id', controller.expense_delete);

router.post('/expense/:id', controller.expense_edit);

module.exports = router;