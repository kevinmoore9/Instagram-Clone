import { RECEIVE_PHOTO, RECEIVE_PHOTOS, RECEIVE_COMMENT } from '../actions/photo_actions';
import merge from 'lodash/merge';

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return merge({}, oldState, {[action.photo.id]: action.photo});
    case RECEIVE_COMMENT:
      let newState = merge({}, oldState);
      newState[action.comment.photo].comments.push(action.comment);
      return newState;
    default:
      return oldState;
  }
};

export default photosReducer;
