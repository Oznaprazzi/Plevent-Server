
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExpenseSchema = new Schema(
    {
        title: String,
        category: String,
        amount: Number,
        event: {type: Schema.Types.ObjectId,  ref: 'Events'}
    }
);

// Export Model
module.exports = mongoose.model('Expense', ExpenseSchema);
