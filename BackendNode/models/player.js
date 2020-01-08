const mongoose = require('mongoose');

var Player = mongoose.model('Player', {
    name: { type: String },
    rank: { type: Number, default : 1 },
    nationality: { type: String },
    grandSlamTitles: { type: Number }
}, 
{
    versionKey : false
}
);

module.exports = { Player };