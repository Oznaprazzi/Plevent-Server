var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GearSchema = new Schema(
    {
        description: String,
        event: {type: Schema.Types.ObjectId,  ref: 'Events'}
    }
);

// Export Model
module.exports = mongoose.model('Gear', GearSchema);