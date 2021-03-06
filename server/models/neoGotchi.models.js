const mongoose = require('mongoose');

const neoGotchiSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: [true, 'STAWP MESSIN WITH ME CODE HOMIE!']
    },
    name: {
        type:String,
        required: [true, 'Provide a name for your pet!']
    },
    status: {
        hunger: {
            type: Number, 
            min:0, 
            max:[100, 'Too much feeding can cause obesity and death, please feed responsibly!'],
            required: [true, 'hunger level is required!'],
            default: 50
        },
        happiness: {
            type: Number, 
            min:0,
            max:[100, 'your pet is too happy right now, time for some work'],
            required: [true, 'happiness level is required!'],
            default: 10
        },
    },
    exp: {
        strength: {
            type: Number, 
            min:[0, 'Exp cannot be negative!'], 
            required: [true, 'Strength exp is required!'],
            default: 0
        },
        dexterity: {
            type: Number, 
            min:[0, 'Exp cannot be negative!'],
            required: [true, 'Dex exp is required!'],
            default: 0
        },
        intelligence: {
            type: Number, 
            min:[0, 'Exp cannot be negative!'], 
            required: [true, 'Int exp is required!'],
            default: 0
        }
    },
    stage: {//stage in the pet's life
        type: String,
        required: [true, 'stage is required!'],
        default: 'Egg',
        enum: ['Egg', 'Baby', 'Child', 'Adult'],//built in string validation
    },
    species: {
        type: Number,
        required: [true, 'species is required'],
        default: 1
    }
    
}, {toJSON:{virtuals:true}})

neoGotchiSchema.virtual('totalExp'). //create vitrual (doesn't get saved in the db) to get total exp of pet
    get(function() {
        let totalExp=0;
        for (const [key, value] of Object.entries(this.exp)) {//loop through exp types of pet, add values to totalexp
            totalExp+=value
        }
        return totalExp
    }).
    set(function(v) {//not needed but ill keep it here just in case
    });

module.exports = mongoose.model('NeoGotchi', neoGotchiSchema)