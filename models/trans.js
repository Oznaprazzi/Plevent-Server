var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TransportSchema = new Schema(
    {
        title: {type : String, required: true, max: 150},
        people: {type: Number, required: true},
        fuel: {type: String, required: true, max: 150},
        owner: {type: Schema.Types.ObjectId,  ref: 'User'},
        event: {type: Schema.Types.ObjectId,  ref: 'Events'}
    }
);

// Export Model
module.exports = mongoose.model('Transport', TransportSchema);