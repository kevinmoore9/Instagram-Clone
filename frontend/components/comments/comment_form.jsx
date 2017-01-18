import React from 'react';
import { Link, withRouter } from 'react-router';
import Comment from './comment';
import { createLike } from '../../util/like_api_util';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  compressComments() {
    let comments = this.props.photo.comments;
    if (comments.length > 3) {
      return (
        <Link className="compress-comments">view all {comments.length} comments (dead)</Link>
      );
    }
  }

  renderComments() {
    let comments = this.props.photo.comments;
    if (comments) {
      if (comments.length < 4) {
        return (
          comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
          ))
        );
      } else {
        return (
          comments.slice(comments.length - 3, comments.length).map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))
        );
      }
    }
  }



  render () {
    const like = this.props.photo.likes.length === 1 ? "like" : "likes";
    // const likeParams = (store.getState().session.currentUser
    //   ? {user_id: store.getState().session.currentUser.id,
    //      photo_id: this.props.photo.id}
    //    : null);

    return (
      <div className="comment-section">
        <div className="likes">
          <p> {this.props.photo.likes.length} {like}</p>
        </div>
        <div className="comment">
          <h2 className="username">{this.props.photo.username}</h2>
          <p>{this.props.photo.caption}</p>
        </div>
        <div className="comments">
          {this.compressComments()}
          {this.renderComments()}
        </div>
        <div className="form">
          <img className="like-button"
               src="https://maxcdn.icons8.com/Share/icon/Messaging//like1600.png"
               />
             <textarea className="comment-form"
                 type="text"
                 placeholder="Add a comment..."
                 />
        </div>
      </div>
    );
  }
}

export default withRouter(CommentForm);


// {this.comments.slice(this.comments.length - 4, this.comments.length).map(comment => (
//   <Comment id={comment.id} comment={comment} />
// ))}
