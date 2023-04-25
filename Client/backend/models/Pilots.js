const mongoose = require('mongoose');

const PilotData = new mongoose.Schema({
    PilotName: {
        type: String
    },
    LicenseID: {
        type: String
    },
    Experience: {
        type: Number
    },
    Email: {
        type: String
    }
})

module.exports = mongoose.model('Pilots',PilotData);