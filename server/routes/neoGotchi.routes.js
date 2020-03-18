const NeoGotchiController = require('../controllers/neoGotchi.controllers');

module.exports = (app) => {
    app.get('/api', NeoGotchiController.index);
    app.get('/api/neoGotchi', NeoGotchiController.allNeoGotchi);
    app.post('/api/neoGotchi', NeoGotchiController.createNeoGotchi);
    app.get('/api/neoGotchi/:id', NeoGotchiController.oneNeoGotchi);
    app.put('/api/neoGotchi/:id/edit', NeoGotchiController.updateNeoGotchi);
    app.delete('/api/neoGotchi/delete/:id', NeoGotchiController.deleteNeoGotchi);
}