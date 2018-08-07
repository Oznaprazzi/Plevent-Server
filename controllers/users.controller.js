var user = require('../models/user');
var mongoose = require('mongoose');

exports.get_all_users = (req, res, next) => {
    user.find({}, (err, users) => {
        res.send(users);
    });
};

exports.get_user = (req, res, next) => {
    var id = req.params.id;
    // Find the user with the given username
    var query = user.findOne({_id: id});
    // Authenticate
    query.exec((err, user) => {
        if(err) {
            res.send(err);
        } else {
            res.send(user)
        }
    });
}