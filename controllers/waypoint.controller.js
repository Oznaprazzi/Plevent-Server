const addressFinder = require('../services/addressfinder');

exports.index = (req, res, next) => {
    res.json({message: 'This router is used for post requests only!'});
}

exports.address_get = (req, res, next) => {

}

exports.coord_get = (req, res, next) => {
    
}