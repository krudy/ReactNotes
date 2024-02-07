const Note = require("../../db/models/note");

module.exports = {
    saveNote: function (req, res) {

        const newNote = new Note({
            title: 'test title 2',
            body: 'test note body',
        })
        
        newNote.save().then(() => {
            console.log('note has been saved successfully');
        });

        res.send('homepage is working.');
    }
}