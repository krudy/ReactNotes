import React from 'react';
import './Notes.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';
import Modal from 'react-modal';
import EditNote from './EditNote/EditNote';
import axios from 'axios';

class Notes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            notes: [],
            showEditModal: false,
            editNote: {}
        };
    }

    componentDidMount( ) {
        this.fetchNotes();
    }

    async fetchNotes() {
       const res = await axios.get('http://localhost:3000/api/notes');
       const notes = res.data;
       
       this.setState({ notes: notes });
    }

    deleteNote(id) {
        console.log('deleting note ' + id);
        const notes = [...this.state.notes]
            .filter(note => note._id !== id);
        this.setState({ notes: notes });

    }

    addNote(note) {
        const notes = [...this.state.notes];
        notes.push(note);
        this.setState({ notes: notes });
    }

    editNote(note) {
        const notes = [...this.state.notes];
        const index = notes.findIndex(x => x._id === note._id);
        if (index >= 0) {
            notes[index] = note;
            this.setState({ notes: notes });
        }
        this.toogleModal();
    }

    toogleModal() {
        this.setState({ showEditModal: !this.state.showEditModal });
    }

    editNoteHandler(note) {
        this.toogleModal();
        this.setState({ editNote: note });
    }



    render() {


        return (
            <div>
                <p>My Notes:</p>

                <NewNote
                    onAdd={(note) => this.addNote(note)} />

                <Modal
                    isOpen={this.state.showEditModal}
                    contentLabel='Edit note'>
                    <EditNote
                        title = {this.state.editNote.title}
                        body = {this.state.editNote.body}
                        id = {this.state.editNote._id}
                        onEdit={note => this.editNote(note)} />
                <button onClick={() => this.toogleModal()}>Cancel</button>
                </Modal>

                {this.state.notes.map(note => (
                    <Note
                        key={note._id}
                        title={note.title}
                        body={note.body}
                        id={note._id}
                        onEdit={(note) => this.editNoteHandler(note)}
                        onDelete={(id) => this.deleteNote(note.id)} />

                ))}

            </div>
        );
    }
};


export default Notes;