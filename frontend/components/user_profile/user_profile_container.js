import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchPhotos } from '../../actions/photo_actions';
import UserProfileIndex from './user_profile_index';

const mapStateToProps = ({photos}) => ({
  photos: Object.keys(photos).map(id => photos[id])
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId =>  dispatch(fetchUser(userId)),
  fetchPhotos: userId => dispatch(fetchPhotos({userId}))
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfileIndex);
