import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="nav-bar">
          <div className="home-link">
            <img src="https://image.freepik.com/free-icon/instagram-photo-camera-logo-outline_318-56004.jpg"></img>
            <h1>Instagram</h1>
          </div>
          <p>placeholder2</p>
        </div>
      </header>
    );
  }
}

export default NavBar;
