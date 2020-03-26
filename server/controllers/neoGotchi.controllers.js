const User = require('../models/user.models');
const NeoGotchi = require('../models/neoGotchi.models');


module.exports = {
    // index route
    index: (request, response) => {
        response.json({
        message: "Hello, Welcome to the NeoGotchi api..."
            });
    },
        //  ===== User CRUD =====
    createUser: (request, response) => {
        console.log("creating user...")
        console.log(request.body)
        User.create({userID: 'testing'})
            .then(msg => {
                response.status(201).json(msg)
                console.log('user created', request.body)
            })
            .catch(err => {
                response.status(400).json(err)
                console.log('something went wrong...')
            });
    },
    getUser: (request, response) => {
        console.log('getting user....')
        console.log(request.params.id)
        User.findOne({userID: request.params.id})
            .then(msg => {
                response.status(200).json({user:msg})
                console.log('You got your user')
            })
            .catch(err => {
                response.status(404).json(err)
                console.log('LIKE WTF...?')
            });
    },
    updateUser: (request, response) => {
        User.findOneAndUpdate({userID: request.params.id}, request.body, {upsert:true, new: true, setDefaultsOnInsert: true, runValidators:true})
            .then(msg => response.status(202).json(msg))
            .catch(err => response.status(304).json(err));
    },
    //owned: all the NeoGotchi's owned by the user
    // ownedNeoGotchi : async (req, res) => {
    //     const { id } = req.params; //user's ID
    //     const user = await User.findById(id).populate('neoGotchi')
    //         .catch(err => response.status(404).json(err));
    //     res.send(user.neoGotchi);
    // },
    // ====== CRUD for NeoGotchi =====
    // Create
    createNeoGotchi: (request, response) => {
        console.log("create is fired!");
        NeoGotchi.create({owner: 'testing', name:'wasd'})
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
    // Read: find all NeoGotchi in database =====Good for debuggin purpose only=====
    allNeoGotchi: (request, response) => {
        // console.log("Find all data is fired!")
        NeoGotchi.find()
            .then(msg => response.status(200).json({neogotchies: msg}))
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