/**
 * Created by Dipen on 1/08/2018.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema(
    {
        eventName: {type: String, required: true, max: 100},
        eventDate:  {type: Date, required:true},
        hasAvalibilityPlanner: {type: Boolean, default: false},
        users: [
            {type: Schema.Types.ObjectId,  ref: 'User'}
        ]

    }
);

// Export Model
module.exports = mongoose.model('Events', EventSchema);
