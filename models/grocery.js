var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrocerySchema = new Schema(
    {
        description: String
    }
);

// Export model
module.exports = mongoose.model('Groceries', GrocerySchema);