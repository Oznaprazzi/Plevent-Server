var user = require('../models/user');
var mongoose = require('mongoose');

exports.index = (req, res, next) => {
    res.send('resource');
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