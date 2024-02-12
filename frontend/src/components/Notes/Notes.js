import React from 'react';
import './Notes.css';
import Note from './Note/Note';

class Notes extends React.Component {

    constructor(props) {
        super(props);

        this.notes = [
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
        ];
    }

    render() {


        return (
            <div>
                <p>My Notes:</p>

                {this.notes.map(note => (
                    <Note
                        title={note.title}
                        body={note.body}
                        id={note.id} />

                ))}

            </div>
        );
    }
};


export default Notes;