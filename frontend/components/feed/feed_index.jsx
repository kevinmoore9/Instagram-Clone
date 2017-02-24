import React from 'react';
import { Link, withRouter } from 'react-router';
import FeedIndexItem from './feed_index_item';
import NavBar from '../navbar/navbar';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    this.received = false;
  }

  componentWillMount() {
      this.props.fetchFollowedPhotos();
  }

  shouldComponentUpdate(newProps) {
    this.received = true;
    return newProps.photos !== this.props.photos;

  }

  renderFeed() {
    return (
        <div className="feed-index-container" >
          {this.props.photos.reverse().map(
            photo => <FeedIndexItem
                        key={photo.id}
                        photo={photo}
                        updatePhoto={this.props.updatePhoto}
                        createLike={this.props.createLike}
                        deleteLike={this.props.deleteLike}
                        createComment={this.props.createComment} />
          )}
          <p className="explore"
             onClick={() => this.props.fetchPhotos()}>
             Explore More Photos!
           </p>
        </div>
      );
  }

  render() {
    console.log('feed');
    return(
      this.received ? this.renderFeed() : null
    );
  }
}

export default withRouter(FeedIndex);
