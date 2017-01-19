import { connect } from 'react-redux';
import { updatePhoto } from '../../actions/photo_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  updatePhoto: photo => dispatch(updatePhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
