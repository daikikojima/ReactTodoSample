import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import NoteAdd from '@material-ui/icons/NoteAdd';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const Form = (props) => {
  const [todoInput, setTodoInput] = useState('');
  const handleChange = (e) => {
    setTodoInput(e.target.value);
  }

  const handleSubmit = () => {
    if (todoInput !== "") {
      props.dispatch(addTodo(todoInput));
      setTodoInput("");
    }
  }

  return (
    <div className="Form">
      <Paper elevation={1}>
      <InputBase name="todoInput" value={todoInput} onChange={handleChange} placeholder="TODOを追加" />
      <IconButton aria-label="Search" onClick={handleSubmit}>
        <NoteAdd/>
      </IconButton>
      </Paper>
    </div>
  );
}

export default connect()(Form);
