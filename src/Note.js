import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





function Note(props) {
    const[data,setData] = React.useState('');
    const[color,setColor] = React.useState('white')




    function handleDeleteButtonClick() {
        props.handleDelete(props.id)
    }

    function dataChanged(even) {
        console.log(even.target.value);
        setData(even.target.value)
    }

    function updateNote() {
        props.handleEdit(data, props.id);
        setData('');
    }

    function handleColorChange(event) {
            setColor(event.target.value);
    }

    return(
        <div className='item'>
            <TextField
                id="standard-textarea"
                label={props.content}
                placeholder="New Note"
                value={data}
                onChange={dataChanged}
                style={{
                    backgroundColor: color
                }}
                multiline
            />
            <FormControl className='color-select'>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={color}
                    onChange={handleColorChange}
                >
                    <MenuItem value={'white'}>White</MenuItem>
                    <MenuItem value={'lightgray'}>lightGray</MenuItem>
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'green'}>Green</MenuItem>
                </Select>
            </FormControl>
            <Button variant="outlined" onClick={updateNote}>Edit</Button>
            <Button variant="outlined"  onClick={handleDeleteButtonClick}>Delete</Button>

        </div>
    )
}

export default Note;