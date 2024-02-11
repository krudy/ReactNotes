import React from 'react';
import './Notes.css';

class Notes extends React.Component {
    render(){
        return (
            <div>
                <p>My Notes:</p>

                <div className='note'>
                    <p>Wash the dog</p>
                    <div className='description'>
                        <p>Remember to wash the dog with the special shampoo</p>
                    </div>
                    <button>Edit</button>
                    <button className='delete'>Delete</button>
                </div>

                <div className='note'>
                    <p>do the shopping</p>
                    <div className='description'>
                        <p>Buy milk, butter and oranges</p>
                    </div>
                    <button>Edit</button>
                    <button className='delete'>Delete</button>
                </div>

            </div>
        );
    }
};


export default Notes;