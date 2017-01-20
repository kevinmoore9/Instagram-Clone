import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash';

const usersReducer = (oldState = {}, action) =>  {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return oldState;
  }
};

export default usersReducer;
