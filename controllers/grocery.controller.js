var item = require('../models/grocery');
var verify = require('../services/verification');

exports.grocery_list = (req, res, next) => {
    var id = req.params.id;
    var list = [];
    item.find({}, (err, items) => {
        for(let i = 0; i < items.length; i++){
            if(items[i].event == id){
                list.push(items[i]);
            }
        }
        res.send(list);
    });
}

exports.item_post = (req, res, next) => {
    var data = {
        description: req.body.description,
        event: req.body.event
    }
    var valid = verify.verify(data);
    if(!valid){
        res.json({message: 'Something went wrong. Missing field.'});
        return;
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