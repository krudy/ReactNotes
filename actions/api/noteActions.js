const Note = require("../../db/models/note");

class NoteActions {

    saveNote (req, res) {

        const newNote = new Note({
            title: 'test title 2',
            body: 'test note body',
        })
        
        newNote.save().then(() => {
            console.log('note has been saved successfully');
        });

        res.send('homepage is working.');
    }

    getAllNotes(req, res) {
        // getting all notes
        res.send('Api is working.');
    }
    
    getNote(req, res) {
        // getting a single note
        res.send('..');
    }
    
    updateNote(req, res) {
        // updating a single note
        res.send('..');
    }
    
    deleteNote(req, res) {
        // deleting a single note
        res.send('..');
    }


}

module.exports = new NoteActions();