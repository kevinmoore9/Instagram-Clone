import { RECEIVE_PHOTO,
         RECEIVE_PHOTOS,
         RECEIVE_FOLLOWED_PHOTOS,
         RECEIVE_COMMENT,
         RECEIVE_LIKE,
         REMOVE_LIKE } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotosReducer = (oldState = {}, action) => {
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

    case RECEIVE_LIKE:
      let newState = merge({}, oldState);
      let photoId;
      for (let i=1; i<= Object.keys(newState).length; i++) {
        if (newState[i].id === action.like.photo_id) {
            photoId = i;
        }
      }
      newState[photoId].likes.push(action.like);
      return newState;

    case REMOVE_LIKE:
      let newLikeState = merge({}, oldState);
      let photo2;
      for (let i=1; i<= Object.keys(newLikeState).length; i++) {
        if (newLikeState[i].id === action.like.photo_id) {
          photo2 = i;
        }
      }
      const likes = newLikeState[photo2].likes.filter(like => {
        like.id !== action.like.id;
      });
      newLikeState[photo2].likes = likes;
      return newLikeState;

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
