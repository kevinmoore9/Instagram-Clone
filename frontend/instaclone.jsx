import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
import { fetchPhoto, fetchPhotos, createPhoto, fetchFollowedPhotos } from './actions/photo_actions';
import { fetchUser, updateUser } from './actions/user_actions';

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
  window.fetchFollowedPhotos = fetchFollowedPhotos;

  // user actions
  window.fetchUser = fetchUser;
  window.updateUser = updateUser;



  ReactDOM.render(<Root store={store} />, root);

});
