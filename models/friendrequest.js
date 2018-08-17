/**
 * Created by Dipen on 10/08/2018.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FriendsRequestSchema = new Schema(
    {
        sender: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
        friendRequest: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    }
);
// Export Model
module.exports = mongoose.model('FriendsRequest', FriendsRequestSchema);