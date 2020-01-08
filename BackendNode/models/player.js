const mongoose = require('mongoose');
//const Demo = require('./Demo');

const playerSchema = mongoose.Schema({
    playerId : {type : Number, unique: true, default : 12312},
    name: { type: String, required: true, unique : true },
    rank: { type: Number, default : 1 },
    nationality: { type: String, required: true },
    grandSlamTitles: { type: Number, default : 0 }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});



function foo(){
    if( typeof foo.counter == 'undefined' ) {
        foo.counter = 1;
    }
    foo.counter++;
    return foo.counter;
}

const Player = module.exports = mongoose.model('Player', playerSchema);