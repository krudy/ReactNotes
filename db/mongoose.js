const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost:27017/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Note = mongoose.model('Note', {
    title: String,
    body: String    
})

const newNote = new Note({
    title: 'test title',
    body: 'test note body',
})

newNote.save().then(() => {
    console.log('note has been saved successfully');
});