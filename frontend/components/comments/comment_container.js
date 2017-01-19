import { connect } from 'react-redux';
import { updatePhoto, createComment } from '../../actions/photo_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
