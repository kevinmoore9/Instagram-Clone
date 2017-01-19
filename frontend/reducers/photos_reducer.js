import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const photosReducer = (oldState = {}, action) => {
  debugger
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return merge({}, oldState, {[action.photo.id]: action.photo});
    default:
      return oldState;
  }
};

export default photosReducer;
