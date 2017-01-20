import { connect } from 'react-redux';
import { fetchUser, updateCurrentUser } from '../../actions/user_actions';
import { fetchPhotos } from '../../actions/photo_actions';
import UserProfileIndex from './user_profile_index';

const mapStateToProps = ({photos, session}) => ({
  photos: Object.keys(photos).map(id => photos[id])
  // currentFolloweeIds: session.currentUser.followees
  //   .map(followee => followee.id )
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId =>  dispatch(fetchUser(userId)),
  fetchPhotos: userId => dispatch(fetchPhotos({userId})),
  updateCurrentUser: user => dispatch(updateCurrentUser(user))
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfileIndex);
