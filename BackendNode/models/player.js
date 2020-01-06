const mongoose = require('mongoose');

var Player = mongoose.model('Player', {
    name: { type: String },
    rank: { type: Number },
    nationality: { type: String },
    grandSlamTitles: { type: Number }
});

module.exports = { Player };