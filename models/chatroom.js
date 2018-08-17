var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var ChatRoomSchema = new Schema(
    {
        event: {type: Schema.Types.ObjectId, required: true, ref: 'Events'},
        chatid: {type: String, required: true, max: 150}
    }
);

// Export Model
module.exports = mongoose.model('ChatRoom', ChatRoomSchema);