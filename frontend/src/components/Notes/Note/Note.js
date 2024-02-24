import React, { useState } from 'react';

function Note(props) {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => setShowDescription(!showDescription);

    const editHandler = () => {
        props.onEdit({
            title: props.title, 
            body: props.body, 
            _id: props.id})
    }

    return (
        <div className='note'>
            <p onClick = {() => toggleDescription()}>{props.title}</p>         
            {showDescription &&  <div className='description'>
                <p>{props.body}</p>
            </div>}
            <button onClick={editHandler}>Edit</button>
            <button 
            className='delete'
            onClick = {() => props.onDelete(props.id)}
            >Delete</button>
        </div>
    );
}

export default Note;