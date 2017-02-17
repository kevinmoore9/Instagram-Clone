import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileHeader = props => {
  const user = Object.assign({}, store.getState().profileDetail);
  const currentUser = store.getState().session.currentUser;

  return (
    <div className="profile-header">
      <img src={user.profile_img_url}className="profile-picture"/>
      <div className="profile-info">
        <div className="top-line">
          <p className="username">{user.username}</p>
          <button className="follow-button"
                  onClick={ () => {
                    if(user.followed) {
                      user.followers = user.followers - 1;
                      user.followed = false;
                    } else {
                      user.followers = user.followers + 1;
                      user.followed = true;
                    }
                    props.updateUser({user: user, id: user.id});
                  }}
                  >
            { user.followed ? "Following" : "Follow" }
          </button>
        </div>

        <div className="stats">
          <div>
            <p className="num">
              {Object.keys(store.getState().photos).length}
            </p>
            <p>posts</p>
          </div>
          <div>
            <p className="num">
              {user.followers ? user.followers : 0}
            </p>
            <p>followers</p>
          </div>
          <div>
            <p className="num">
              15
            </p>
            <p>following</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default withRouter(ProfileHeader);
