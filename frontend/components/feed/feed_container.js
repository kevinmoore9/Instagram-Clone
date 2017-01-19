import { connect } from 'react-redux';
import { createPhoto,
         fetchPhoto,
         fetchPhotos,
        updatePhoto,
        createComment } from '../../actions/photo_actions';
import FeedIndex from './feed_index';

const mapStateToProps = ({photos}) => ({
  photos: Object.keys(photos).map(id => photos[id])
});

const mapDispatchToProps = (dispatch) => ({
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  createComment: comment => dispatch(createComment(comment)),
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
