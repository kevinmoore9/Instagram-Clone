import { connect } from 'react-redux';
import { createPhoto,
         fetchPhoto,
         fetchPhotos } from '../../actions/photo_actions';
import FeedIndex from './feed_index';

const mapStateToProps = ({photos}) => ({
  photos: Object.keys(photos).map(id => photos[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
