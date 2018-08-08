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
    event.find().populate({path: 'users', type: id}).exec((err, events) => {
        if (err) {
            res.send(err);
        } else {
            res.send(events);
        }
    });
}

exports.edit_event = (req, res, next) => {
    var id = req.params.id;
    event.findByIdAndUpdate(id, {$set: req.body}, {new: false}, function (err, events) {
        if (err) return handleError(err);
        res.send(events);
    });

}

exports.delete_event = (req, res, next) => {
    var id = req.params.id;
    event.deleteMany({_id: id}).catch(err => console.log(err));
    res.json(`Successfully deleted ${id}`);

}

