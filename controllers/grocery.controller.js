var mongoose = require('mongoose');
var item = require('../models/grocery');

exports.grocery_list = (req, res, next) => {
    item.find({}, (err, items) => {
        res.send(items);
    });
}

exports.item_post = (req, res, next) => {
    var data = {
        description: req.body.description
    }
    console.log(data);
    item.create(data, (err, data) => {
        if(err){
            res.status(500);
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.item_delete = (req, res, next) => {

}