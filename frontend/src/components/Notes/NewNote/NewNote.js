import React, {useState} from "react";

function NewNote(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const changeTitleHandler = (event) =>{ 
        const value =  event.target.value;
        setTitle(value);
    }

    const changeDescriptionHandler = (event) => {
        const value =  event.target.value;
        setDescription(value);
    }

    const addNote = () => {
        const note = {
            title: title,
            description: description
        };

        props.onAdd(note);

        setTitle('');
        setDescription('');
    }

    return (
        <div className = 'note'>
            <label>Title:</label>
            <input type = 'text' 
            value={title} 
            onChange={changeTitleHandler}/>
            
            <label>Description:</label>
            <input type = 'text' 
            value = {description}
            onChange = {changeDescriptionHandler}/>

            <button onClick={() => addNote()} >Add Note</button>
        </div>
    );
}

export default NewNote;