
var friendsList = require('../models/friendslist');
var mongoose = require('mongoose');

exports.get_all_friend = (req, res, next) => {
    var id = req.params.uid;
    friendsList.find({user: id}).populate({path: 'user'}).populate({path: 'friends'}).exec(function (err, data) {
        if (err) return handleError(err);
        res.send(data);

    });
};

exports.add_friend = (req, res, next) => {
    var data = {
        user: req.body.user,
        friends: req.body.friends,


    };
    friendsList.create(data, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
};

exports.unfriend = (req, res, next) => {
    var id = req.params.id;
    var sid = req.params.sid;
    var rid = req.params.rid;

    var otherFriendObject;
    friendsList.find({}, (err, data) => {

        res.send(data);
    });
    // friendsRequest.deleteMany({_id: id}).catch(err => console.log(err));
    // res.json({ message: 'Sucessful' });
};
