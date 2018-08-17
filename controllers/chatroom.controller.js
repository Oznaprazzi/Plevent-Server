var verify = require('../services/verification');
var chatroom = require('../models/chatroom');
var mongoose = require('mongoose');
const updateQuery = {};

exports.add_chatroom = (req, res, next) => {
    var data = {
        event: req.body.event,
        chatid: req.body.chatid
    };
    var valid = verify.verify(data);
    if(!valid){
        res.json({message: 'Something went wrong. Missing field.'});
        return;
    }
    chatroom.create(data, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.get_chatroom = (req, res, next) => {
    var id = req.params.id;
    var list = [];
    chatroom.find().populate({path: 'event', type: id}).exec(function(err, chatrooms){
        for(let i = 0; i < chatrooms.length; i++){
            if(chatrooms[i].event._id == id){
                list.push(chatrooms[i]);
            }
        }
        res.send(list);
    });
}

function handleError(err){
    console.log(err);

}