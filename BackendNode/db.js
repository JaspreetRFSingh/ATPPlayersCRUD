const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ATP', (err)=>{
    if(!err){
        console.log('Mongo DB Connection succeeded!');
    }
    else{
        console.log('Error in db connection: ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;