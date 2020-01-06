const express = require('express');
var router = express.Router();

var { Player } = require('../models/player')

router.get('/', (req, res) => {
    Player.find(
        (err, docs)=>{
            if(!err){
                res.send(docs);
            }
            else{
                console.log('Error in retrieving Players: ' + JSON.stringify(err, undefined, 2));
            }
    });
});

router.post('/', (req, res) => {
    var player = new Player({
        name: req.body.name,
        rank: req.body.rank,
        nationality: req.body.nationality,
        grandSlamTitles: req.body.grandSlamTitles,
    });

    player.save((err, doc) => {
        if (!err) { 
            console.log("mai pahunch gya!")
            res.send(doc); }
        else { console.log('Error in inserting players data :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;