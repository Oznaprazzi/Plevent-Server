
var avalibility = require('../models/avalibility');
var mongoose = require('mongoose');

// exports.get_all = (reg, res, next) => {
//     var id = reg.params.id;
//     var list = [];
//
//     avalibility.find().sort({user: 'asc'}).exec((err, avalplanner) => {
//         if (err) {
//             res.send(err);
//         } else {
//             for (let i = 0; i < avalplanner.length; i++) {
//         if (avalplanner[i].event == id) {
//             list.push(avalplanner[i]);
//         }
//
//     }
//     res.send(list);
// }
// });
// };