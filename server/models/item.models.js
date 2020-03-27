const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Provide a name for the item']
    },
    description: {
        type:String,
        required: [true, 'Provide a description for the item'],
        default:"no description yet"
    },
    category: {//food, upgrade, other...
        type:String,
        required: [true, 'Provide a category for the item']
    },
    cost: {
        type:Number,
        required: [true, 'Provide a category for the item'],
        default: 50
    }
}, {timestamps:true})

module.exports = mongoose.model('item', itemSchema)
