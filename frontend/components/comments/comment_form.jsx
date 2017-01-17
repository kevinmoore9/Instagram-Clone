import React from 'react';
import { Link, withRouter } from 'react-router';
import Comment from './comment';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderComments() {
    let comments = this.props.photo.comments;
    if (comments) {
      if (comments.length < 4) {
        return (
          comments.slice(comments.length - 4, comments.length).map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))
        );
  //     } else {
  //       return (
  //         <p className="view-all">view all {comments.length} comments</p>
  //         {comments.slice(comments.length - 4, comments.length).map(comment => (
  //           <Comment id={comment.id} comment={comment} />
  //         ))}
  //       );
      }
  //
    }
  }

render () {
  const like = this.props.photo.likes.length === 1 ? "like" : "likes";
  return (
    <div className="comment-section">
      <div className="likes">
        <p> {this.props.photo.likes.length} {like}</p>
      </div>
      <div className="comments">
        <h2 className="username">{this.props.photo.username}</h2>
        <p className="caption">{this.props.photo.caption}</p>
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
