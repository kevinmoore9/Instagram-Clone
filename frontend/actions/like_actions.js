import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes
});

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});

export const createLike = params => dispatch => (
  LikeApiUtil.createLike(params)
    .then(like => dispatch(receiveLike))
);

export const fetchLikes = photoId => dispatch => (
  LikeApiUtil.fetchLikes(photoId)
    .then(likes => dispatch(receiveLikes(likes)))
);
