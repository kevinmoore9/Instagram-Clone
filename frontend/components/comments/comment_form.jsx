import React from 'react';
import { Link, withRouter } from 'react-router';
import Comment from './comment';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.updatePhoto = this.props.updatePhoto.bind(this);
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

  addComment() {

  }

  addLike(photoId) {
    this.updatePhoto(this.props.photo);
  }


  render () {
    const like = this.props.photo.likes.length === 1 ? "like" : "likes";
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
          <form onSubmit={this.addLike(this.props.photo.id)}>
          <input type="image"
                 alt="submit"
                 className="like-button"
                src="https://maxcdn.icons8.com/Share/icon/Messaging//like1600.png"
               />
          </form>
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
