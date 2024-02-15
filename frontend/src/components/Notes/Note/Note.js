import React, { useState } from 'react';

function Note(props) {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => setShowDescription(!showDescription);

    return (
        <div className='note'>
            <p onClick = {() => toggleDescription()}>{props.title}</p>         
            {showDescription &&  <div className='description'>
                <p>{props.body}</p>
            </div>}
            <button>Edit</button>
            <button 
            className='delete'
            onClick = {() => props.onDelete(props.id)}
            >Delete</button>
        </div>
    );
}

export default Note;