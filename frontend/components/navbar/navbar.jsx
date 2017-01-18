import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="nav-bar">
          <Link to={'/'}className="home-link">
            <img src="https://image.freepik.com/free-icon/instagram-photo-camera-logo-outline_318-56004.jpg"></img>
            <h1>Instaclone</h1>

          </Link>

          <input placeholder="search -- dead"
                 className="search-bar"/>
           <div className="nav-menu">
             <Link className="profile-link">
               <img src="https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"></img>
             </Link>
            </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
