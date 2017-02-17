import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});


export const fetchUser = id => dispatch => {
  return (
    UserApiUtil.fetchUser(id)
      .then(user => dispatch(receiveUser(user)))
  );
};

export const updateUser = params => dispatch => {
  return (UserApiUtil.updateUser(params)
    .then(user => dispatch(receiveUser(user)))
  );
};
