
var firendsList = require('../models/friendslist');
var mongoose = require('mongoose');
//
// exports.send_friend_request = (reg, res, next) => {
//     var userid = reg.params.userid;
//     var friendsid = reg.params.friendsid;
//     var list = [];
//
//     firendsList.find().exec((err, avalplanner) => {
//         if (err) {
//             res.send(err);
//         } else {
//             for (let i = 0; i < avalplanner.length; i++) {
//                 if (avalplanner[i].event == id) {
//                     list.push(avalplanner[i]);
//                 }
//
//             }
//             res.send(list);
//         }
//     });
// };
//
// exports.send_friend_request = (req, res, next) => {
//     var data = {
//         startDate: req.body.startDate,
//         endDate: req.body.endDate,
//         event: req.body.event,
//         name: req.body.name,
//         user: req.body.user
//
//     };
//     avalibility.create(data, (err, data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.json(data);
//         }
//     });
// };