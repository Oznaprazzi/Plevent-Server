/**
 * Created by Dipen on 10/08/2018.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AvailabilityPlannerSchema = new Schema(
    {
        startDate: {type: Date, required: true},
        endDate: {type: Date, required: true},
        name: {type: String, required: true, max: 150},
        user: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
        event: {type: Schema.Types.ObjectId, required: true, ref: 'Events'}

    }
);

// Export Model
module.exports = mongoose.model('Availability', AvailabilityPlannerSchema);

