const Note = require("../../db/models/note");

class NoteActions {

    saveNote (req, res) {

        const title = req.body.title;
        const body = req.body.body;

        res.send('note added successfully. title: ' + title + ' body: ' + body);
    }

    getAllNotes(req, res) {
        // getting all notes
        res.send('Api is working.');
    }
    
    getNote(req, res) {
        // getting a single note
        res.send('note info');
    }
    
    updateNote(req, res) {
        // updating a single note
        res.send('note has been updated');
    }
    
    deleteNote(req, res) {
        const id = req.params.id;
        // deleting a single note
        res.send(`note ${id} has been deleted `);
    }


}

module.exports = new NoteActions();