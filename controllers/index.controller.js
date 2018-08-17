var user = require('../models/user');
var event = require('../models/event');
var verify = require('../services/verification');
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
            res.send(err);
        } else {
            if(user == null){
                res.status(200).json({
                    user,
                    valid: false
                });
            } else {
                var stored = user.password;
                var valid = security.authenticate(data.password, stored);
                res.status(200).json({
                    user: user,
                    valid: valid
                });
            }
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
    var valid = verify.verify(data);
    if(!valid){
        res.json({message: 'Something went wrong. Missing field.'});
        return;
    }
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
