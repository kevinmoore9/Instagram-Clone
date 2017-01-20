import React from 'react';
import { Link, withRouter } from 'react-router';
import FeedIndexItem from './feed_index_item';
import NavBar from '../navbar/navbar';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchFollowedPhotos();
  }

  render() {
    return (

        <div className="feed-index-container" >
          {this.props.photos.reverse().map(
            photo => <FeedIndexItem
                        key={photo.id}
                        photo={photo}
                        updatePhoto={this.props.updatePhoto}
                        createComment={this.props.createComment} />
          )}
          <p className="explore"
             onClick={() => this.props.fetchPhotos()}>
             Explore More Photos!
           </p>
        </div>
      );
  }
}

export default withRouter(FeedIndex);
