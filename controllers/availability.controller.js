/**
 * Created by Dipen on 10/08/2018.
 */

var avalibility = require('../models/avalibility');
var mongoose = require('mongoose');

exports.create_planner = (req, res, next) => {
    var data = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        event: req.body.event,
        name: req.body.name,
        user: req.body.user

    };
    avalibility.create(data, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
};
exports.get_all = (reg, res, next) => {
    var id = reg.params.id;
    var list = [];
    console.log("here")
    avalibility.find().sort({user: 'asc'}).exec((err, avalplanner) => {
        if (err) {
            res.send(err);
        } else {
            for (let i = 0; i < avalplanner.length; i++) {
                if (avalplanner[i].event == id) {
                    list.push(avalplanner[i]);
                }

            }
            res.send(avalplanner);
        }
    });
};
exports.get_aval_planner = (req, res, next) => {
    var id = req.params.id;
    var uid = req.params.uid;
    var list = [];

    avalibility.find().sort({user: 'asc'}).exec((err, avalplanner) => {
        if (err) {
            res.send(err);
        } else {
            for (let i = 0; i < avalplanner.length; i++) {
                if (avalplanner[i].user == uid && avalplanner[i].event == id) {
                    list.push(avalplanner[i]);
                }

            }
            res.send(list);
        }
    });
};



