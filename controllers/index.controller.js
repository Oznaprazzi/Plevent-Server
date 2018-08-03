var user = require('../models/user');
var event = require('../models/event');
var accommodation = require('../models/accommodation');

var security = require('../services/security');

exports.login = (req, res, next) => {

    var data = {
        username: req.body.username,
        password: req.body.password
    }
    // Find the user with the given username
    var query = user.findOne({ 'username': data.username });
    // Authenticate
    query.exec((err, user) => {
        if(err) {
            console.log("ERROR!");
            res.send(err);
        } else {
            var stored = user.password;
            console.log(user);
            var valid = security.authenticate(data.password, stored);
            res.status(200).json({
                user: user,
                valid: valid
            });
        }
    });
}

exports.register = (req, res, next) => {
    var data = {
        username: req.body.username,
        password: security.encrypt(req.body.password),
        fname: req.body.fname,
        lname: req.body.lname,
        bdate: req.body.bdate
    };
    console.log(data);
    user.create(data, (err, data) => {
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.event = (req, res, next) => {
    var data = {
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        users: req.body.users
    };
    event.create(data, (err, data) => {
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.accommodation = (req, res, next) => {
    var data = {
        title: req.body.title,
        street: req.body.street,
        state: req.body.state,
        city: req.body.city,
        country:  req.body.country,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        price: req.body.price,
        guests: req.body.guests
    };
    accommodation.create(data, (err, data) => {
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    });
}
