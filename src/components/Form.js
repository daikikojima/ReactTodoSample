import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import NoteAdd from '@material-ui/icons/NoteAdd';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: 'aaa',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      todoInput: e.target.value,
    });
  }

  handleSubmit() {
    if (this.state.todoInput !== "") {
      this.setState({
        todoInput: ""
      });
    }
  }

  render() {
    return (
      <div className="Form">
        <Paper elevation={1}>
        <InputBase name="todoInput" value={this.state.todoInput} onChange={this.handleChange} placeholder="TODOを追加" />
        <IconButton aria-label="Search" onClick={this.handleSubmit}>
          <NoteAdd/>
        </IconButton>
        </Paper>
      </div>
    );
  }
}

export default Form;
