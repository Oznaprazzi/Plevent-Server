var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WaypointSchema = new Schema(
    {
        title: String,
        address: String,
        longitude: Number,
        latitude: Number,
        event: {type: Schema.Types.ObjectId,  ref: 'Events'}
    }
);

WaypointSchema.virtual('coordinates').get(() => {
    return {
        lon: this.longitude,
        lat: this.latitude
    };
});

// Export Model
module.exports = mongoose.model('Waypoint', WaypointSchema);