require('newrelic');
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import FeedContainer from './feed/feed_container';
import UserProfileContainer from './user_profile/user_profile_container';
import PostFormContainer from './post/post_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  return (
    <Provider store={ store }>
      <Router history={ hashHistory } >
        <Route path="/"
               component={App}>
          <IndexRoute component={FeedContainer}
                      onEnter={_ensureLoggedIn} />

          <Route
            path="login"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn}
            />
          <Route
            path="signup"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn}
            />
          <Route path="users/:userId"
                 component={UserProfileContainer}
                 onEnter={_ensureLoggedIn} />
          <Route path="post"
                 component={PostFormContainer}
                 onEnter={_ensureLoggedIn} />
        </Route>


      </Router>
    </Provider>
  );
};

export default Root;
