const addressFinder = require('../services/address.finder');

exports.index = (req, res, next) => {
    res.json({message: 'This router is used for post requests only!'});
}

exports.get_address = (req, res, next) => {
    var query = req.body.query;
    console.log(query);
    var result = addressFinder.autocomplete(query);
    res.json(result);
}

exports.coord_get = (req, res, next) => {
    res.json({message: 'Not implemented yet'});
}