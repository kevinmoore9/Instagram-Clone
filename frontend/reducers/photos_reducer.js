import { RECEIVE_PHOTO,
         RECEIVE_PHOTOS,
         RECEIVE_FOLLOWED_PHOTOS,
         RECEIVE_COMMENT } from '../actions/photo_actions';
import merge from 'lodash/merge';

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return merge({}, oldState, {[action.photo.id]: action.photo});
    case RECEIVE_FOLLOWED_PHOTOS:
      let photos = Object.values(action.photos).filter(photo => photo.followed === true);
      let followedPhotos = {};
      for (let i = 1; i <= photos.length; i++) {
        followedPhotos[i] = photos[i-1];
      }
      return followedPhotos;
    case RECEIVE_COMMENT:
      let newState = merge({}, oldState);
      newState[action.comment.photo].comments.push(action.comment);
      return newState;
    default:
      return oldState;
  }
};

export default photosReducer;
