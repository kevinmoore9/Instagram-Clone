import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileHeader = props => {
  const user = store.getState().profileDetail;
  return (
    <div className="profile-header">
      <img src={user.profile_img_url}className="profile-picture"/>
      <div className="profile-info">
        <div>
          <p className="username">{user.username}</p>
          <p>Following/not</p>
          <p>...</p>
        </div>
        <div>
          <p>posts</p>
          <p>followers</p>
          <p>following</p>
        </div>
      </div>
    </div>
  );
};



// <img
//   src={props.profilePicture}
//   className="main-profile-img"></img>
// <p className="profile-username">{props.username}</p>

export default withRouter(ProfileHeader);
