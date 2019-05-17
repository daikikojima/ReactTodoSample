import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import Form from './Form';
import Header from '../components/Header';

const Index = (props) => {
  return (
    <div className="App">
      <Header title="Sample App"/>
      <Form />
      <TodoList todos={props.todos}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.Todo
  }
}
export default connect(mapStateToProps)(Index);
