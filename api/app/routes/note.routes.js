module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create new note
    app.post('/notes', notes.create);

    // Get all notes
    app.get('/notes', notes.findAll);

    // Get note by id
    app.get('/notes/:id', notes.findOne);

    // Update aote by id
    app.put('/notes/:id', notes.update);

    // Delete note by id
    app.delete('/notes/:id', notes.delete);
}