import React from 'react';
import NavBar from './navbar/navbar';

const App = (props) => {
  const state = store.getState();
  const navBar = state.session.currentUser
    ? <NavBar state={state} logout={props.logout} />
    : null;

  return (
    <div>
      {navBar}
      {props.children}
    </div>
  );
};

export default App;
