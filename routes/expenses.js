const express = require('express');
const router = express.Router();

const controller = require('../controllers/expense.controller');

router.get('/', controller.expense_list);

router.post('/expense', controller.expense_post);

router.delete('/expense/:id', controller.expense_delete);

module.exports = router;