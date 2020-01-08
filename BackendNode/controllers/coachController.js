const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { coachSchema } = require('../models/coaches');

router.get('/', (req, res) => {
    coachSchema.find(
        (err, docs)=>{
            if(!err){
                res.send(docs);
            }
            else{
                console.log('Error in retrieving Coaches: ' + JSON.stringify(err, undefined, 2));
            }
    });
});

router.post('/', (req, res) => {
    let coach = new Coach({
        name: req.body.name,
        coachId: req.body.coachId,
        nationality: req.body.nationality,
        coachOf: req.body.coachOf,
    });

    coachSchema.save((err, doc) => {
        if (!err) { 
            console.log("mai pahunch gya!")
            res.send(doc); }
        else { console.log('Error in inserting coach data :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;
