/**
 * Created by Dipen on 10/08/2018.
 */

var avalibility = require('../models/avalibility');
var mongoose = require('mongoose');

exports.create_planner = (req, res, next) =>{
    var data = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        event: req.body.event

    };
    avalibility.create(data, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
};

exports.get_aval_planner = (req, res, next) => {
    var id = req.params.id;
    avalibility.findOne().populate({path: 'event', type: id}).exec((err, avalplanner) => {
        if (err) {
            res.send(err);
        } else {
            res.send(avalplanner);
        }
    });
}




