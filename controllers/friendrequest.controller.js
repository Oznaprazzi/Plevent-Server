
var friendsRequest = require('../models/friendrequest');
var mongoose = require('mongoose');

exports.create_friend_request = (req, res, next) => {
    // var userid = reg.params.userid;
    // var friendsid = reg.params.friendsid;

    var data = {
        sender: req.body.sender,
        friendRequest: req.body.friendRequest
    };
    friendsRequest.create(data, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
};

exports.get_friend_request = (req, res, next) => {
    var id = req.params.uid;
    friendsRequest.find({friendRequest: id}).populate({path: 'sender'}).exec(function (err, data) {
        if (err) return handleError(err);
        res.send(data);

    });
};


exports.get_all_friend_request = (req, res, next) => {
    var id = req.params.uid;
    friendsRequest.find({sender: id}).populate({path: 'friendRequest'}).exec(function (err, data) {
        if (err) return handleError(err);
        res.send(data);

    });
};

function handleError(err){
    console.log(err);

}