import Header from "./Header";
import NoteList from "./NoteList";
import React,{Component} from 'react';
import './App.css';
import Input from "./Input";

function App() {
    const[notes, setNotes] = React.useState(['taskA','taskB', 'taskC']);
    function handleDelete(index){
        setNotes([
            ...notes.slice(0,index),
            ...notes.slice(index+ 1, notes.length)
        ])
    }

    function handleAdd(text) {
        setNotes([
            ...notes,
            text
        ])

    }

    function handleEdit(text,index) {
        setNotes([
            ...notes.slice(0,index),
            text,
            ...notes.slice(index+ 1, notes.length)
        ])
    }




  return(
      <div id = 'myDIV' className = 'header'>
        <Header></Header>
          <Input handleAdd={handleAdd} ></Input>
        <NoteList notes = {notes} handleDelete={handleDelete} handleEdit={handleEdit}></NoteList>
      </div>
  );
}

export default App;
