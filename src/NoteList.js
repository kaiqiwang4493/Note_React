import React, {Component} from 'react';
import Note from "./Note";

function NoteList(props) {
    const notesList = props.notes.map((note, index)=>{
        return <Note content = {note} id = {index} handleDelete={props.handleDelete} handleEdit={props.handleEdit} />
    })


    return(
        <div className='list-wrapper'>
            {notesList}
        </div>
    )
}

export default NoteList;