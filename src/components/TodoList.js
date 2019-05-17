import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos}) =>{
  console.log(todos);
  return (
  <div className="TodoList">
    {todos.map((todo, index) =>
      <Todo todo={todo} key={index}/>
    )}
  </div>
)};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
