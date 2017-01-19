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
          <button className="follow-button">Following</button>
        </div>

        <div className="stats">
          <div>
            <p className="num">5</p>
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


export default withRouter(ProfileHeader);
