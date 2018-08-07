var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GearSchema = new Schema(
    {
        description: String
    }
);

// Export Model
module.exports = mongoose.model('Gear', GearSchema);