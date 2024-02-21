import React, {useState} from "react";

function NewNote(props) {

    const [showForm, setShowForm] = useState(false);
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
            body: description
        };

        props.onAdd(note);

        setTitle('');
        setDescription('');
        setShowForm(false);
    }

    return (
        showForm ? (
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
        ) : ( 
            <button onClick={() => {setShowForm(true)}}>New note</button>
        )
    );
}

export default NewNote;