var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AccommodationSchema = new Schema(
    {
        title: {type : String, required: true, max: 150},
        street: {type: String, required: true, max: 150},
        state: {type: String, required: true, max: 150},
        city: {type: String, required: true, max: 150},
        country:  {type: String, required: true, max: 150},
        fromDate: {type: Date, required: true},
        toDate: {type: Date, required: true},
        price: {type: Number, required: true},
        guests: {type: Number}
    }
);

// Export Model
module.exports = mongoose.model('Accommodation', AccommodationSchema);