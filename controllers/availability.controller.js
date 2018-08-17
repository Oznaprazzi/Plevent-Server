var verify = require('../services/verification');
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
    var valid = verify.verify(data);
    if(!valid){
        res.json({message: 'Something went wrong. Missing field.'});
        return;
    }
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

    avalibility.find().sort({user: 'asc'}).exec((err, avalplanner) => {
        if (err) {
            res.send(err);
        } else {
            for (let i = 0; i < avalplanner.length; i++) {
                if (avalplanner[i].event == id) {
                    list.push(avalplanner[i]);
                }

            }
            res.send(list);
        }
    });
};

exports.delete_plan = (req, res, next) => {
    var id = req.params.id;
    avalibility.deleteMany({_id: id}).catch(err => console.log(err));
    res.json(`Successfully deleted ${id}`);

};

exports.edit_plan = (req, res, next) => {
    var id = req.params.id;
    avalibility.findByIdAndUpdate(id, {$set: req.body}, {new: false}, function (err, events) {
        if (err) return handleError(err);
        res.send(events);
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



