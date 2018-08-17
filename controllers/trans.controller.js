var mongoose = require('mongoose');
var transports = require('../models/trans');
var verify = require('../services/verification');

exports.trans_list = (req, res, next) => {
    var id = req.params.id;
    var list = [];
    transports.find().populate({path: 'owner', type: id}).exec(function(err, trans){
        console.log(trans);
        for(let i = 0; i < trans.length; i++){
            if(trans[i].event == id){
                list.push(trans[i]);
            }
        }
        res.send(list);
    });

}

exports.trans_post = (req, res, next) => {
    var data = {
        title: req.body.title,
        people: req.body.people,
        fuel: req.body.fuel,
        owner: req.body.owner,
        event: req.body.event
    };
    var valid = verify.verify(data);
    if(!valid){
        res.json({message: 'Something went wrong. Missing field.'});
        return;
    }
    transports.create(data, (err, data) => {
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.trans_delete = (req, res, next) => {
    var id = req.params.id;
    transports.deleteMany({_id: id}).catch(err => console.log(err));
    res.json(`Successfully deleted ${id}`);

}

exports.trans_edit = (req, res, next) => {
    var id = req.params.id;
    var valid = verify.verify(req.body);
    if(!valid){
        res.json({message: 'Something went wrong. Missing field.'});
        return;
    }
    transports.findByIdAndUpdate(id, {$set: req.body}, {new: false}, function (err, trans) {
        if (err) return handleError(err);
        res.send(trans);
    });
}