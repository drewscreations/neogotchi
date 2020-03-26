const NeoGotchiController = require('../controllers/neoGotchi.controllers');

module.exports = (app) => {
    // index route
    app.get('/api', NeoGotchiController.index);
    // user route
    app.post('/api/user', NeoGotchiController.createUser);
    app.get('/api/user/:id', NeoGotchiController.getUser);
    // neogotchi route
    app.get('/api/neoGotchi', NeoGotchiController.allNeoGotchi);
    app.post('/api/neoGotchi', NeoGotchiController.createNeoGotchi);
    app.get('/api/neoGotchi/:id', NeoGotchiController.oneNeoGotchi);
    app.put('/api/neoGotchi/:id/edit', NeoGotchiController.updateNeoGotchi);
    app.delete('/api/neoGotchi/delete/:id', NeoGotchiController.deleteNeoGotchi);
}