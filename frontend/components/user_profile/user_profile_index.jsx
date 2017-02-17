import React from 'react';
import { Link, withRouter } from 'react-router';
import { fetchUser, updateUser } from '../../actions/user_actions';
import ProfileHeader from './profile_header';
import NavBar from '../navbar/navbar';

class UserProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.profileDetail = null;
    this.photos = null;
  }

  componentWillMount() {
    this.props.fetchPhotos(this.props.params.userId);
    this.props.fetchUser(this.props.params.userId);
  }

  shouldComponentUpdate(newProps) {
    return true;
  }

  componentWillUpdate(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.fetchPhotos(newProps.params.userId);
      this.props.fetchUser(newProps.params.userId);
    }
  }

  renderProfile() {
    return(
      <div className="user-profile" >
        <ProfileHeader updateUser={this.props.updateUser}/>
        <div className="profile-index">
          {this.props.photos.map(
            photo => <img src={photo.image_url}
                          key={photo.id}
                          className="profile-index-image"/>
        )}
        </div>
      </div>
    );
  }

  render() {
    console.log('render');
    const photos = Object.values(store.getState().photos);
    return (
       photos.every(photo => photo.user_id == this.props.params.userId) ? this.renderProfile() : null
      );
  }
}

export default withRouter(UserProfileIndex);
