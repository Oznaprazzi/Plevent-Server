/**
 * Created by Dipen on 3/08/2018.
 */
var event = require('../models/event');

exports.add_event = (req, res, next) => {
    var data = {
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        users: req.body.users
    };
    event.create(data, (err, data) => {
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.get_events = (req, res, next) => {

    var data = {
        username: req.body.username
    }
    // Find the user with the given username
    var query = user.findOne({ 'username': data.username });

    // Authenticate
    query.exec((err, user) => {
        if(err) {
            console.log("errored");
        } else {

            console.log("in here");

        }
    });
}
