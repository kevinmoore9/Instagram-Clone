import { connect } from 'react-redux';
import { logout} from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({photos}) => ({
  photos: Object.keys(photos).map(id => photos[id])
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
