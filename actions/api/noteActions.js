const Note = require("../../db/models/note");

class NoteActions {

    async saveNote(req, res) {

        const title = req.body.title;
        const body = req.body.body;

        let newNote;
        try{

            newNote = new Note({
               title: title,
               body: body
            });
            await newNote.save();
        }catch(err){
            return res.status(422).json({message: err.message});
        };
        


        res.status(200).json(newNote);
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
        res.status(201).json(notes);
    }

    // getting a single note
    async getNote(req, res) {
        const id = req.params.id;
        const note = await Note.findOne({_id: id}); 
        res.status(200).json(note);
    }

    // updating a single note
    async updateNote(req, res) {
        const id = req.params.id;
        const note = await Note.findOne({_id: id}); 
        note.title = req.body.title;
        note.body = req.body.body;
        await note.save();

        res.status(201).json(note);
    }

    // deleting a single note
    async deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({_id: id});
        res.sendStatus(204);
    }


}

module.exports = new NoteActions();