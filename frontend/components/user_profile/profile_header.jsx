import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileHeader = props => {
  const user = store.getState().profileDetail;
  const currentUser = store.getState().session.currentUser;
  const currentFolloweeIds = currentUser.followees
          .map(followee => followee.id);
  const followButton = currentFolloweeIds.includes(user.id)
        ? <button className="following-button">Following</button>
        : <button className="follow-button">Follow</button> ;
  return (
    <div className="profile-header">
      <img src={user.profile_img_url}className="profile-picture"/>
      <div className="profile-info">
        <div className="top-line">
          <p className="username">{user.username}</p>
          {followButton}
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
