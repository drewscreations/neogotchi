const NeoGotchiController = require('../controllers/neoGotchi.controllers');

module.exports = (app) => {
    // index route
    app.get('/api', NeoGotchiController.index);
    // user route
    app.post('/api/user', NeoGotchiController.createUser);
    app.get('/api/user/all', NeoGotchiController.getallUsers);
    app.get('/api/user/:id', NeoGotchiController.getUser);
    app.put('/api/user/:id', NeoGotchiController.updateUser);
    // neogotchi route
    app.get('/api/neoGotchi', NeoGotchiController.allNeoGotchi);
    app.get('/api/neoGotchi/hatcheryOwned', NeoGotchiController.hatcheryOwnedNeoGotchi);
    app.get('/api/neoGotchi/userOwned/:id', NeoGotchiController.userOwnedNeoGotchi);
    app.post('/api/neoGotchi', NeoGotchiController.createNeoGotchi);
    app.get('/api/neoGotchi/:id', NeoGotchiController.oneNeoGotchi);
    app.put('/api/neoGotchi/:id/action', NeoGotchiController.updateNeoGotchi);
    app.delete('/api/neoGotchi/delete/:id', NeoGotchiController.deleteNeoGotchi);
    //items route
    app.get('/api/items', NeoGotchiController.allItems);
    app.post('/api/items', NeoGotchiController.createItem);
    app.get('/api/items/:id', NeoGotchiController.oneItem);
    app.put('/api/items/:id/edit', NeoGotchiController.updateItem);
    app.delete('/api/items/delete/:id', NeoGotchiController.deleteItem);
}