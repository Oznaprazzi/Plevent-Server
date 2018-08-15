/**
 * Created by Dipen on 10/08/2018.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FriendsListSchema = new Schema(
    {
        user: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
        friends: {type: Schema.Types.ObjectId, required: true, ref: 'User'}


    }
);

// Export Model
module.exports = mongoose.model('FriendsList', FriendsListSchema);
