const NeoGotchi = require('../models/neoGotchi.models');

module.exports = {
    // index route
    index: (request, response) => {
        response.json({
        message: "Hello, this is index"
            });
    },
    // Create
    createNeoGotchi: (request, response) => {
        console.log("create is fired!");
        NeoGotchi.create(request.body)
            .then(msg => {
                response.status(201).json(msg);
            })
            .catch(err => response.status(400).json(err));
    },
    // Read: find one NeoGotchi base on ID
    oneNeoGotchi:(request, response) => {
        console.log('Search based on ID is fired!');
        NeoGotchi.findOne({_id:request.params.id})
            .then(msg=>response.status(200).json(msg))
            .catch(err => response.status(404).json(err));
    },
    // Read: find all NeoGotchi in database
    allNeoGotchi: (request, response) => {
        // console.log("Find all data is fired!")
        NeoGotchi.find()
            .then(msg => response.status(200).json({NeoGotchis: msg}))
            .catch(err => response.status(404).json(err));
    },
    // Update: update the target NeoGotchi
    updateNeoGotchi: (request, response) => {
        console.log("Update is fired!!");
        NeoGotchi.findByIdAndUpdate({_id:request.params.id}, request.body, {runValidators: true})
            .then(msg => response.status(202).json(msg))
            .catch(err => response.status(304).json(err));
    },
    // Delete: delete target NeoGotchi
    deleteNeoGotchi: (request, response) => {
        console.log("Delete is fired!");
        NeoGotchi.deleteOne({_id:request.params.id})
            .then(deleteConfirmation => response.status(200).json(deleteConfirmation))
            .catch(err => response.status(400).json(err));
    }
}