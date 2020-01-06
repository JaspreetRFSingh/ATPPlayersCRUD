const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

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

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No player found with given id : ${req.params.id}`);

    Player.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Player :' + JSON.stringify(err, undefined, 2)); }
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


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No player found with given id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Player.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Player Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Player.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Player Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;