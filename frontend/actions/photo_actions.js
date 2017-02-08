import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const RECEIVE_FOLLOWED_PHOTOS = "RECEIVE_FOLLOWED_PHOTOS";

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = (photo) =>  ({
  type: RECEIVE_PHOTO,
  photo
});

export const receiveFollowedPhotos = (photos) => ({
  type: RECEIVE_FOLLOWED_PHOTOS,
  photos
});

export const fetchFollowedPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos()
    .then(photos => dispatch(receiveFollowedPhotos(photos)))
);
export const createPhoto = params => dispatch => (
  PhotoApiUtil.createPhoto(params)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const updatePhoto = (params) => dispatch => {
return(  PhotoApiUtil.updatePhoto(params)
  .then(photo => dispatch(receivePhoto(photo)))
);
};

export const fetchPhoto = id => dispatch => (
  PhotoApiUtil.fetchPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const fetchPhotos = filters => dispatch => {
  return (PhotoApiUtil.fetchPhotos(filters)
    .then(photos => dispatch(receivePhotos(photos)))
);
};

export const createComment = params => dispatch => {
  return (
  PhotoApiUtil.createComment(params)
    .then(comment => dispatch(receiveComment(comment)))
);
};

export const createLike = params => dispatch => {
  return (
  PhotoApiUtil.createLike(params)
    .then(photo => dispatch(receiveLike(photo)))
);
};

export const deleteLike = params => dispatch => {
  return (
  PhotoApiUtil.deleteLike(params)
    .then(like => dispatch(removeLike(like)))
);
};

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
});
