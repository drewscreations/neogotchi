const mongoose = require('mongoose');
const db = 'neoGotchi';


mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log(`Established connection to the Database ${db}`))
.catch(err=>console.log("Connection to MongoDB failed, something went wrong", err))