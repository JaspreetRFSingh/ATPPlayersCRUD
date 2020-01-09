const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');



const playerSchema = mongoose.Schema({
    name: { type: String, required: true, unique : true },
    rank: { type: Number},
    nationality: { type: String, required: true },
    grandSlamTitles: { type: Number, default : 0 }
}, {
    versionKey: false 
});

autoIncrement.initialize(mongoose.connection);
playerSchema.plugin(autoIncrement.plugin, 'Player')
const Player = module.exports = mongoose.model('Player', playerSchema);