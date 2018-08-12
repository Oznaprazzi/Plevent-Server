var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrocerySchema = new Schema(
    {
        description: String,
        event: {type: Schema.Types.ObjectId,  ref: 'Events'}
    }
);

// Export model
module.exports = mongoose.model('Groceries', GrocerySchema);