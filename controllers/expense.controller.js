var expense = require('../models/expense');

exports.expense_list = (req, res, next) => {
    var id = req.params.id;
    var list = [];
    expense.find({}, (err, items) => {
        for(let i = 0; i < items.length; i++){
            if(items[i].event == id){
                list.push(items[i]);
            }
        }
        res.send(list);
    });
}

exports.expense_post = (req, res, next) => {
    var data = {
        title: req.body.title,
        category: req.body.category,
        amount: req.body.amount,
        event: req.body.event
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