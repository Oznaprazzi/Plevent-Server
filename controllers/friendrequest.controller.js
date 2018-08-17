var verify = require('../services/verification');
var friendsRequest = require('../models/friendrequest');
var mongoose = require('mongoose');

exports.create_friend_request = (req, res, next) => {
    // var userid = reg.params.userid;
    // var friendsid = reg.params.friendsid;

    var data = {
        sender: req.body.sender,
        friendRequest: req.body.friendRequest
    };
    var valid = verify.verify(data);
    if(!valid){
        res.json({message: 'Something went wrong. Missing field.'});
        return;
    }
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
    friendsRequest.find({friendRequest: id}).populate({path: 'sender'}).populate({path:"friendRequest"}).exec(function (err, data) {
        if (err) return handleError(err);
        res.send(data);

    });
};


exports.get_all_friend_request = (req, res, next) => {
    var id = req.params.uid;

    friendsRequest.find().populate({path: 'friendRequest'}).exec(function (err, data) {
        if (err) return handleError(err);
        var combinedArray = [];

        for(let i = 0; i < data.length; i++){
            if(data[i].sender == id){
                combinedArray.push(data);
            }
        }
        friendsRequest.find({friendRequest: id}).populate({path: 'friendRequest'}).exec(function (err, data2) {
            if (err) return handleError(err);
            for(let i = 0; i < data2.length; i++){
                if(data2[i].sender == id){
                    combinedArray.push(data2);
                }
            }
            res.send(combinedArray);
        });
    });
};
exports.delete_friend_request = (req, res, next) => {
    var id = req.params.id;
    friendsRequest.deleteMany({_id: id}).catch(err => console.log(err));
    res.json({ message: 'Sucessful' });
};


function handleError(err){
    console.log(err);

}