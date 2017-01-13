import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentForm from '../comments/comment_form';

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
      <CommentForm photo={photo} />
    </div>
  );
};

export default withRouter(FeedIndexItem);


// change photo={photo} to comments={photo.comments}
