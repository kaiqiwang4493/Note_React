import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Input(props) {
    const[input, setInput] = React.useState('');

    function handleTextFieldChange(e) {
        setInput(e.target.value);
    }

    function handleAddItem(e) {
        e.preventDefault();
        if (input != '') {
        props.handleAdd(input);
        setInput('');
        }

    }

    return(
        <div>
            <TextField id="note-input" label="Note" type="text"
                       onChange={handleTextFieldChange}
                       value={input}
            />
            <Button variant="outlined"  onClick={handleAddItem}>Add</Button>
        </div>
    )
}


export default Input;