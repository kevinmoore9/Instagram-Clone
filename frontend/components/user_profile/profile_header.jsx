import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileHeader = props => {
  const user = store.getState().profileDetail;
  const currentUser = store.getState().session.currentUser;


  return (
    <div className="profile-header">
      <img src={user.profile_img_url}className="profile-picture"/>
      <div className="profile-info">
        <div className="top-line">
          <p className="username">{user.username}</p>
          <p>Following/not</p>
        </div>
        <div className="stats">
          <div>
            <p className="num">12</p>
            <p>posts</p>
          </div>
          <div>
            <p className="num">43</p>
            <p>followers</p>
          </div>
          <div>
            <p className="num">31</p>
            <p>following</p>
          </div>
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
