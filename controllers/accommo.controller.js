var mongoose = require('mongoose');
var accommodation = require('../models/accommodation');
var verify = require('../services/verification');

exports.accommo_list = (req, res, next) => {
    var id = req.params.id;
    var list = [];
    accommodation.find({}, (err, accommos) => {
        for(let i = 0; i < accommos.length; i++){
            if(accommos[i].event == id){
                list.push(accommos[i]);
            }
        }
        res.send(list);
    });

}

exports.accommo_post = (req, res, next) => {
    var data = {
        title: req.body.title,
        street: req.body.street,
        state: req.body.state,
        city: req.body.city,
        country:  req.body.country,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        price: req.body.price,
        guests: req.body.guests,
        event: req.body.event
    };
    var valid = verify.verify(data);
    if(!valid){
        res.json({message: 'Something went wrong. Missing field.'});
        return;
    }
    accommodation.create(data, (err, data) => {
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.accommo_delete = (req, res, next) => {
    var id = req.params.id;
    accommodation.deleteMany({_id: id}).catch(err => console.log(err));
    res.json(`Successfully deleted ${id}`);

}

exports.accommo_edit = (req, res, next) => {
    var id = req.params.id;
    accommodation.findByIdAndUpdate(id, {$set: req.body}, {new: false}, function (err, accommo) {
        if (err) return handleError(err);
        res.send(accommo);
    });
}

function handleError(err){
    console.log(err);
}