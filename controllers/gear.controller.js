var item = require('../models/gear');

exports.gear_list = (req, res, next) => {
    item.find({}, (err, items) => {
        res.send(items);
    });
}

exports.item_post = (req, res, next) => {
    var data = {
        description: req.body.description
    }
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
    var id = req.params.id;
    item.deleteMany({_id: id}).catch(err => console.log(err));
    res.json({ message: 'Sucessful' });
}