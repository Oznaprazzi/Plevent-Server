const express = require('express');
const router = express.Router();

const controller = require('../controllers/index.controller');

router.get('/', (req, res, send) => {
    res.redirect('http://asciimoticon-web.herokuapp.com');
});

// Login authentication
router.post('/login', controller.login);

// Registering to the system
router.post('/register', controller.register);

// Create an event in the system
router.post('/event', controller.event);
// Get the event related to an user
router.post('/get_events', controller.get_events);
module.exports = router;