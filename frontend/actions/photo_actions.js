import * as PhotoApiUtil from '../photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = (photo) =>  ({
  type: RECEIVE_PHOTO,
  photo
});

export const createPhoto = params => dispatch => (
  PhotoApiUtil.createPhoto(params)
    .then(photo => dispatch(receivePhoto))
);

export const fetchPhoto = id => dispatch => (
  PhotoApiUtil.fetchPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos()
    .then(photos => dispatch(receivePhotos()))
);



// Add error callbacks for debugging
