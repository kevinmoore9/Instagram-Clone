import { RECEIVE_PHOTO,
         RECEIVE_PHOTOS,
         RECEIVE_FOLLOWED_PHOTOS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;

    case RECEIVE_PHOTO:
      let newState = merge({}, oldState);
      let photoId;
      for (let i = 1; i <= Object.keys(newState).length; i++) {
        if (newState[i].id === action.photo.id) {
          photoId = i;
        }
      }
      newState[photoId] = null;
      return merge(newState, {[photoId]: action.photo});

    case RECEIVE_FOLLOWED_PHOTOS:
      let photos = Object.values(action.photos).filter(photo => photo.followed === true);
      let followedPhotos = {};
      for (let i = 1; i <= photos.length; i++) {
        followedPhotos[i] = photos[i-1];
      }
      return followedPhotos;

    default:
      return oldState;
  }
};

export default PhotosReducer;
