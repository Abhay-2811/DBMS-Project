const mongoose = require('mongoose');


const FlightData = new mongoose.Schema({
    FlightDate: {
        type: String
    },
    From: {
        type: String
    },
    FromTime: {
        type: String
    },
    To: {
        type: String
    },
    ToTime: {
        type: String
    },
    PilotID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pilots'
    },
    Price: {
        type: Number
    },
    Bookings: {
        type: [String]
    }
    // req.body.FlightDate,req.body.From,req.body.FromTime,req.body.To,req.body.ToTime,req.body.PilotID,req.body.Price
})

module.exports = mongoose.model('Flights',FlightData);
