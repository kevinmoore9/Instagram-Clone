import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
import { fetchPhoto, fetchPhotos, createPhoto } from './actions/photo_actions';
import { createLike, fetchLikes, deleteLike } from './actions/like_actions';
import { fetchUser } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

  // session actions
  window.login = login;
  window.logout = logout;

  // photo actions
  window.fetchPhoto = fetchPhoto;
  window.fetchPhotos = fetchPhotos;
  window.createPhoto = createPhoto;

  // user actions
  window.fetchUser = fetchUser;

  // like actions
  window.createLike = createLike;
  window.fetchLikes = fetchLikes;
  window.deleeteLike = deleteLike;

  ReactDOM.render(<Root store={store} />, root);

});
