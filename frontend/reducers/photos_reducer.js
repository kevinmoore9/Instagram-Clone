import { RECEIVE_PHOTO,
         RECEIVE_PHOTOS,
         RECEIVE_FOLLOWED_PHOTOS,
         RECEIVE_COMMENT } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;

    case RECEIVE_PHOTO:
      let newState = merge({}, oldState);
      newState[action.photo.id] = null;
      return merge(newState, {[action.photo.id]: action.photo});
      // return merge({}, oldState, {[action.photo.id]: action.photo});

    case RECEIVE_FOLLOWED_PHOTOS:
      let photos = Object.values(action.photos).filter(photo => photo.followed === true);
      let followedPhotos = {};
      for (let i = 1; i <= photos.length; i++) {
        followedPhotos[i] = photos[i-1];
      }
      return followedPhotos;

    case RECEIVE_COMMENT:
      let newPhotoState = merge({}, oldState);
      let photo;
      for (let i=1; i<= Object.keys(newState).length; i++) {
        if (newState[i].id === action.comment.photo) {
          photo = i;
        }
      }
      newPhotoState[photo].comments.push(action.comment);
      return newPhotoState;


    default:
      return oldState;
  }
};

export default PhotosReducer;
