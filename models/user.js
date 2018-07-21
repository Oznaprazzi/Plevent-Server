var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: {type : String, required: true, max: 100},
        password: {type: String, required: true, max: 100}
    }
);

// Export Model
module.exports = mongoose.model('User', UserSchema);