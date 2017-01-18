import React from 'react';
import { Link, withRouter } from 'react-router';

const Comment = ({comment}) => {
  return (
    <div className="comment-index-item">
    <h2 className="username">username</h2>
    <p>{comment.body}</p>
    </div>
  );
};

export default withRouter(Comment);
