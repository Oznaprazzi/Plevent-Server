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

exports.user_edit = (req, res, next) =>{
    var id = req.params.id;

    user.findByIdAndUpdate(id, {$set: req.body}, {new: false}, function (err, user) {
        console.log(req.body);
        if (err) return handleError(err);
        res.status(200).json({
            user,
            valid: true
        });
    });

}

exports.user_edit_username = (req, res, next) => {
    var id = req.params.id;
    var username = req.params.username;
    var query = user.findOne({'username': username});
    // Authenticate
    query.exec((err, user) => {
        if(err) {
            res.send(err);
        } else {
            console.log("User " + user);
            res.send(true)
        }
    });
    /*var query = user.findOne({'username': username});
    // Authenticate
    query.exec((err, u) => {
        if (err) {
            res.send(err);
        } else {
            console.log(u);
            if (u == null || (u._id == id && u.username == username)) {
                user.findByIdAndUpdate(id, {$set: req.body}, {new: false}, function (err, user) {
                    console.log(req.body);
                    if (err) return handleError(err);
                    res.status(200).json({
                        valid: true
                    });
                });
            }else{
                res.status(200).json({
                    valid: false
                });
            }
        }
    });*/
}