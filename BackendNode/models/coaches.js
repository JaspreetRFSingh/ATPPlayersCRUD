const mongoose = require('mongoose')

let coachSchema = mongoose.model(
    {
        coachId : {type: Number, unique : true},
        name : String,
        nationality : String, 
        coachOf : {type: String, default: "Own son"}
    }, {
        versionKey : false
    }
);
module.exports = {coachSchema};
