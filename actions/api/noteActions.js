const Note = require("../../db/models/note");

class NoteActions {

    saveNote(req, res) {

        const title = req.body.title;
        const body = req.body.body;

        res.send('note added successfully. title: ' + title + ' body: ' + body);
    }

    // getting all notes
    async getAllNotes(req, res) {

        let notes;
        try {
            notes = await Note.find({});

        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        console.log(notes);
        res.status(200).json(notes);
    }

    // getting a single note
    async getNote(req, res) {
        const id = req.params.id;
        const note = await Note.findOne({_id: id}); 
        res.status(200).json(note);
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