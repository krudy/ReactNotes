import React from 'react';

function Note(props) {
    return (
        <div className='note'>
            <p>{props.title}</p>
            <div className='description'>
                <p>{props.body}</p>
            </div>
            <button>Edit</button>
            <button 
            className='delete'
            onClick = {() => props.onDelete(props.id)}
            >Delete</button>
        </div>
    );
}

export default Note;