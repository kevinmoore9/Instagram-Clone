import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { fetchPhotos,
         updatePhoto,
         createLike,
         deleteLike,
         createComment } from '../../actions/photo_actions';
import UserProfileIndex from './user_profile_index';

const mapStateToProps = ({photos, session}) => ({
  photos: Object.keys(photos).map(id => photos[id])

});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId =>  dispatch(fetchUser(userId)),
  fetchPhotos: userId => dispatch(fetchPhotos({userId})),
  updateUser: user => dispatch(updateUser(user)),
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: like => dispatch(deleteLike(like)),
  createComment: comment => dispatch(createComment(comment))
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfileIndex);
