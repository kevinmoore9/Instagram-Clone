import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileHeader = props => {
  return (
    <div className="profile-header">
      <img
        src={props.profilePicture}
        className="main-profile-img"></img>
      <p className="profile-username">{props.username}</p>
    </div>
  );
};
