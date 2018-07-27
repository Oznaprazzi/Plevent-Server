var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: {type : String, required: true, max: 100},
        password: {type: String, required: true, max: 100},
        lname: {type: String, required: true, max: 100},
        fname: {type: String, required: true, max: 100},
        age:  {type: Date}
    }
);

// Export Model
module.exports = mongoose.model('User', UserSchema);