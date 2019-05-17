import { combineReducers } from 'redux';
import * as types from '../types';

const Todo = (state = [], action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          title: action.text,
        },
      ];
    default:
      return state;
  }
}
export default combineReducers({Todo});
