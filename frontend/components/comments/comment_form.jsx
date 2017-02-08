import React from 'react';
import { Link, withRouter } from 'react-router';
import Comment from './comment';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user_id: store.getState().session.currentUser.id,
        photo_id: 1,
        body: ""
    };

    let like = null;

    this.update = this.update.bind(this);
    this.updatePhoto = props.updatePhoto.bind(this);
    this.createComment = props.createComment.bind(this);
    this.createLike = props.createLike.bind(this);
    this.deleteLike = props.deleteLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }


  renderComments() {
    let comments = this.props.photo.comments;
    if (comments) {
      if (comments.length < 7) {
        return (
          comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
          ))
        );
      } else {
        return (
          comments.slice(comments.length - 7, comments.length)
            .map(comment => (
              <Comment key={comment.id} comment={comment} />
            )));
      }
    }
  }

  update(e) {
    return (
      this.setState({ body: e.currentTarget.value })
    );
  }

  handleLike() {
    this.createLike({like: {
      photo_id: this.props.photo.id,
      user_id: this.state.user_id
    }});
  }

  handleUnlike(e) {
   this.deleteLike({id: this.like.id});
   this.like = null;
  }

  handleComment() {
    this.state.photo_id = this.props.photo.id;
    this.createComment({comment: this.state});
    this.state.body = "";
  }


  render () {
    const likeWord = this.props.photo.likes.length === 1 ? "like" : "likes";

    this.props.photo.likes.forEach(l => {
      if (l.user_id === this.state.user_id) {
        this.like = l;
      }
    });

    const liked = this.like ? true : false;
    const comment = "";
    return (
      <div className="comment-section">
        <div className="likes">
          <p> {this.props.photo.likes.length} {likeWord}</p>
        </div>
        <div className="comment">
          <h2 className="username">{this.props.photo.username}</h2>
          <p>{this.props.photo.caption}</p>
        </div>
        <div className="comments">

          {this.renderComments()}
        </div>
        <div className="form">
          <img className="like-button"
               src={
                 liked
                    ? "https://res.cloudinary.com/dc4ro79uf/image/upload/v1485238048/heart_gdavjf.png"
                    : "https://res.cloudinary.com/dc4ro79uf/image/upload/v1485238086/blackheart_dyacg4.png"
                  }

               onClick={liked ? this.handleUnlike : this.handleLike}
               />
             <form onSubmit={this.handleComment}>
               <input
                 className="comment-form"
                 type="text"
                 placeholder="Add a comment..."
                 value={this.state.body}
                 onChange={this.update}
                 />
             </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CommentForm);
