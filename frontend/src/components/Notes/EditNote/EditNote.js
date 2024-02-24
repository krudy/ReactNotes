import React, { useState} from "react";

function EditNote(props) {

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.body);

    const changeTitleHandler = (event) =>{ 
        const value =  event.target.value;
        setTitle(value);
    }

    const changeDescriptionHandler = (event) => {
        const value =  event.target.value;
        setDescription(value);
    }

    const editNote = () => {
        const note = {
            title: title,
            body: description,
            _id: props.id
        };

        props.onEdit(note);

        
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
    
                <button onClick={() => editNote()} >save</button>
            </div>
            );
    
}

export default EditNote;