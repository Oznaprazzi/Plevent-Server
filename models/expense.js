
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExpenseSchema = new Schema(
    {
        title: String,
        category: String,
        amount: Number
    }
);

// Export Model
module.exports = mongoose.model('Expense', ExpenseSchema);
