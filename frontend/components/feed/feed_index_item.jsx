import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentForm from '../comments/comment_form';

const FeedIndexItem = ({photo, updatePhoto, createLike, deleteLike, createComment}) => {
  let user = photo.username;
  return (
    <div className="feed-index-item">
      <div className="photo-index-header">
        <img
          src={photo.user_profile_url}
          className="index-profile-img"></img>
        <Link to={`/users/${photo.user_id}`}
              className="username">{user}</Link>
      </div>
      <img className="index-img"src={photo.image_url}></img>
      <CommentForm photo={photo}
                   updatePhoto={updatePhoto}
                   createComment={createComment}
                   createLike={createLike}
                   deleteLike={deleteLike}/>
    </div>
  );
};

export default withRouter(FeedIndexItem);
