const mongoose = require('mongoose');

// const NeoGotchiSchema = new mongoose.Schema({
//     user: {type: String,
//         required: [true, 'Username is required!']},
//     message: {type: String,
//         required: [true, 'Message is required!']}
// }, {timestamps:true});

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Username is required!']
        },
        email: {
            type: String,
            required: [true, 'Email is required!'],
            validate: {
                validator: (val)=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
                message: props => `${props.value} is not a valid email!`
                },
            },
        password: {
            type: String,
            required: [true, 'Password is required!']
        },
        exp: {
            petRaising: {type:Number, min:0, required: [true, 'Pet raising exp is required!']},
            strength: {type:Number, min:0, required: [true, 'Strength exp is required!']},
            dexterity: {type:Number, min:0, required: [true, 'Dex exp is required!']},
            intellegence: {type:Number, min:0, required: [true, 'Int exp is required!']}
        },
        neoGotchi : [
            {type: mongoose.Schema.Types.ObjectId,ref:'neoGotchi'}
        ]
    }, {timestamps:true});

const neoGotchiSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Name is required!']
    },
    exp: {
        strength: {type:Number, min:[0, 'must be >0'], required: [true, 'Strength exp is required!']},
        dexterity: {type:Number, min:0, required: [true, 'Dex exp is required!']},
        intellegence: {type:Number, min:0, required: [true, 'Int exp is required!']}
    },
    stage: {//stage in the pet's life
        type:String,
        required: [true, 'stage is required!'],
        enum: ['Egg', 'Baby', 'Child', 'Adult'],//built in string validation
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
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

module.exports = {
    user: mongoose.model('NeoGotchi', userSchema),
    neoGotchi: mongoose.model('neoGotchi', neoGotchiSchema)
}