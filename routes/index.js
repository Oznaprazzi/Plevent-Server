const express = require('express');
const router = express.Router();

const controller = require('../controllers/index.controller');

router.get('/', (req, res, send) => {
    res.redirect('http://asciimoticon-web.herokuapp.com');
})

// Login authentication
router.post('/login', controller.login);

// Registering to the system
router.post('/register', controller.register);

module.exports = router;