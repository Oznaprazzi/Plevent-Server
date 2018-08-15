
var friendsRequest = require('../models/friendrequest');
var mongoose = require('mongoose');

exports.create_friend_request = (req, res, next) => {
    // var userid = reg.params.userid;
    // var friendsid = reg.params.friendsid;

    var data = {
        user: req.body.user,
        friendRequest: req.body.friendRequest
    };
    console.log(data);
    friendsRequest.create(data, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
};