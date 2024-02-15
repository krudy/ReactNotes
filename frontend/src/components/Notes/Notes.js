import React from 'react';
import './Notes.css';
import Note from './Note/Note';

class Notes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

           notes: [
                {
                    id: '12345',
                    title: 'Wash the dog',
                    body: 'Remember to wash the dog with the special shampoo'
                },
                {
                    id: '123345',
                    title: 'do the shopping',
                    body: 'Buy milk, butter and oranges'
                }
            ]
        };
    }

    deleteNote(id) {
        console.log('deleting note ' + id);
        const notes = [...this.state.notes]
            .filter(note => note.id !== id);
        this.setState ({notes: notes});

    }

    render() {


        return (
            <div>
                <p>My Notes:</p>

                {this.state.notes.map(note => (
                    <Note
                        key={note.id}
                        title={note.title}
                        body={note.body}
                        id={note.id}
                        onDelete={(id) => this.deleteNote(note.id)} />

                ))}

            </div>
        );
    }
};


export default Notes;