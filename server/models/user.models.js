const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: [true, "Don't mess with my code homie!"]
    },
    gold: {
        type: Number,
        min:[0, 'cannot have negative money count'],
        required: [true, "please provide the gold count of the player"],
        default: 500
    },
    exp: {
        petRaising: {
            type: Number, 
            min:0, 
            required: [true, 'Pet raising exp is required!'],
            default: 0
        },
        strength: {
            type: Number, 
            min:0, 
            required: [true, 'Strength exp is required!'],
            default: 0 
        },
        dexterity: {
            type: Number, 
            min:0, 
            required: [true, 'Dex exp is required!'],
            default: 0
        },
        intellegence: {
            type: Number, 
            min:0, 
            required: [true, 'Int exp is required!'],
            default: 0
        }
    },
    // neoGotchi : [
    //     {type: mongoose.Schema.Types.ObjectId,ref:'neoGotchi'}
    // ]
    }, {timestamps:true});

    module.exports = mongoose.model('User', UserSchema)