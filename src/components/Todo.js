import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

const Todo = ({todo}) => (
  <div className="Todo">
    <Card>
      <p>{todo.title}</p>
    </Card>
  </div>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
