/**
 * Created by Dipen on 3/08/2018.
 */
var event = require('../models/event');
var mongoose = require('mongoose');
const updateQuery = {};

exports.add_event = (req, res, next) => {
    var data = {
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        users: req.body.users
    };
    event.create(data, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.get_all_events = (req, res, next) => {
    var id = req.params.id;
    var list = [];
    event.find({}, (err, events) => {
        for(let i = 0; i < events.length; i++){
            for(let j = 0; j < events[i].users.length; j++){
                if(events[i].users[j] == id){
                    list.push(events[i]);
                }
            }
        }
        res.send(list);
    });
}

exports.edit_event = (req, res, next) => {
    var id = req.params.id;
    event.findByIdAndUpdate(id, {$set: req.body}, {new: false}, function (err, events) {
        if (err) return handleError(err);
        res.send(events);
    });

}

function handleError(err){
    console.log(err);
}

exports.delete_event = (req, res, next) => {
    var id = req.params.id;
    event.deleteMany({_id: id}).catch(err => console.log(err));
    res.json(`Successfully deleted ${id}`);

}

