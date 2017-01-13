import React from 'react';
import { Link, withRouter } from 'react-router';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchPhotos()
  }

  render() {
    return (
        <div className="feed-index-container" >
          {this.props.photos.map(
            photo => <FeedIndexItem key={photo.id} photo={photo} />
          )}
        </div>
      );
  }
}

export default withRouter(FeedIndex);
