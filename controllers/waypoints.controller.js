var waypoint = require('../models/waypoint');

exports.waypoint_list = (req, res, next) => {
    var eventId = req.params.eventId;
    var list = [];
    waypoint.find({}, (err, items) => {
        for(let i = 0; i < items.length; i++){
            if(items[i].event == eventId){
                list.push(items[i]);
            }
        }
        res.json(list);
    });
}

exports.add_point = (req, res, next) => {
    var data = {
        title: req.body.title,
        address: req.body.address,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        event: req.body.event
    }
    waypoint.create(data, (err, data) => {
        if(err){
            res.status(500);
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.edit_point = (req, res, next) => {
    var id = req.params.id;
    waypoint.findByIdAndUpdate(id, {$set: req.body}, {new: false}, (err, points) => {
        if(err){
            res.status(500);
            res.send(err);
        } else {
            res.json(points);
        }
    })
}

exports.delete_point = (req, res, next) => {
    const id = req.params.id;
    waypoint.deleteMany({'_id': id}).catch(err =>{ res.status(500); res.send(err) });
    res.json({message: 'Successful'});
}