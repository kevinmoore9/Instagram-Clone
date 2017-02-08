import { connect } from 'react-redux';
import { createPhoto,
         fetchPhoto,
         fetchPhotos,
         createLike,
         deleteLike,
        updatePhoto,
        createComment,
        fetchFollowedPhotos} from '../../actions/photo_actions';
import FeedIndex from './feed_index';

const mapStateToProps = ({photos}) => ({
  photos: Object.keys(photos).map(id => photos[id])
});

const mapDispatchToProps = (dispatch) => ({
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  createComment: comment => dispatch(createComment(comment)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: like => dispatch(deleteLike(like)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchFollowedPhotos: () => dispatch(fetchFollowedPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
