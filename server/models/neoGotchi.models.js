const mongoose = require('mongoose');

const NeoGotchiSchema = new mongoose.Schema({
    user: {type: String,
        required: [true, 'Username is required!']},
    message: {type: String,
        required: [true, 'Message is required!']}
}, {timestamps:true});

module.exports = mongoose.model('NeoGotchi', NeoGotchiSchema);