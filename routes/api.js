const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions');

// pobieranie notatek
router.get('/notes', noteActions.getAllNotes);         

//pobieranie konkretnej notatki
router.get('/notes/{id}', noteActions.getNote);

// dodawanie
router.post('/notes', noteActions.saveNote);

// edycja
router.put('/notes', noteActions.updateNote);

// usuwanie
router.delete('/notes', noteActions.deleteNote);

module.exports = router;