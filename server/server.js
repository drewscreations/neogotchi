const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const server = app.listen(port, ()=> console.log(`Server running... at ${port}!!!`));
const io = require('socket.io')(server)

require('./config/mongoose.config');
require('./routes/neoGotchi.routes')(app);
app.use(cors(), express.json(), express.urlencoded({extended:true}));


// io.on('connection', socket=>{
//     console.log(`UserID: ${socket.id} has connected!!!`)
//     console.log('Welcome! (Eldab cuz corona...)');
    
//     socket.on('login', (data)=>{
//         // socket.broadcast.emit('login', data);
//         console.log(data)
//     })

//     socket.on('message', (data)=>{
//         console.log(data) //<--- getting data now
//         // socket.emit('new message', data);
//         // socket.broadcast.emit('new message', data);
//         io.emit('new message', data)
//     })
//     socket.on("disconnect", (data)=> console.log(`User: ${socket.id} has disconnected!!!`, data));
// })