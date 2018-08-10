var expense = require('../models/expense');

exports.expense_list = (req, res, next) => {
    expense.find({}, (err, expenses) => {
        res.send(expenses);
    });
}

exports.expense_post = (req, res, next) => {
    var data = {
        title: req.body.title,
        category: req.body.category,
        amount: req.body.amount
    }
    expense.create(data, (err, data) => {
        if(err){
            res.status(500);
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

exports.expense_edit = (req, res, next) => {
    var id = req.params.id;
    expense.findByIdAndUpdate(id, {$set: req.body}, {new:false}, (err, expenses) => {
        if(err){
            res.status(500);
            res.send(err);
        } else {
            res.json(expenses);
        }
    })
}

exports.expense_delete = (req, res, next) => {
    var id = req.params.id;
    expense.deleteMany({_id: id}).catch(err => res.send(err));
    res.json({message: 'Successful'});
}