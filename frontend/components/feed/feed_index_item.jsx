import React from 'react';
import { Link, withRouter } from 'react-router';

const FeedIndexItem = ({photo}) => {
  let user = photo.username;
  return (
    <div className="feed-index-item">
      <div className="photo-index-header">
        <img
          src={photo.user_profile_url}
          className="index-profile-img"></img>
        <p className="username">{user}</p>
      </div>
      <img className="index-img"src={photo.image_url}></img>
    </div>
  );
};

export default FeedIndexItem;

// <h3 className="username">{photo.user_id}</h3>

// <h2>{user}</h2>
