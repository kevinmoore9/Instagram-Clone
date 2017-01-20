import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileHeader = props => {
  const user = store.getState().profileDetail;
  const currentUser = store.getState().session.currentUser;
  const currentFolloweeIds = currentUser.followees
          .map(followee => followee.id);
  let following = currentFolloweeIds.includes(user.id)
                  ? true : false ;
  return (
    <div className="profile-header">
      <img src={user.profile_img_url}className="profile-picture"/>
      <div className="profile-info">
        <div className="top-line">
          <p className="username">{user.username}</p>
          <button className="follow-button" >
            {following ? "Following" : "Follow"}
          </button>
        </div>

        <div className="stats">
          <div>
            <p className="num">{Object.keys(store.getState().photos).length}</p>
            <p>posts</p>
          </div>
          <div>
            <p className="num">{user.followers ? user.followers.length : 0}</p>
            <p>followers</p>
          </div>
          <div>
            <p className="num">{user.followers ? user.followees.length : 0}</p>
            <p>following</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default withRouter(ProfileHeader);
