
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

exports.get_friend_request = (req, res, next) => {
    var id = req.params.uid;
    friendsRequest.find({user: id}).populate({path: 'friendRequest'}). exec(function (err, data) {
        if (err) return handleError(err);
        res.send(data);
        console.log(res);
    });
        // for(let i = 0; i < events.length; i++){
        //     for(let j = 0; j < events[i].users.length; j++){
        //         if(events[i].users[j] == id){
        //             list.push(events[i]);
        //         }
        //     }
        // }
        // res.send(list);
    //});
};

function handleError(err){
    console.log(err);

}